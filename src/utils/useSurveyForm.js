import { useState } from 'react';
import { validateEmail, validateRequired } from './validation';

const initialFormState = {
    name: '',
    email: '',
    movie: '',
    comment: ''
};

export const useSurveyForm = () => {
    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!validateRequired(formData.name)) newErrors.name = "โปรดใส่ชื่อของคุณ";
        if (!validateRequired(formData.email)) {
            newErrors.email = "โปรดใส่อีเมลของคุณ";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
        }
        if (!validateRequired(formData.movie)) newErrors.movie = "กรุณาเลือกหนังที่คุณชอบ";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitted(true);
        }
    };

    const handleReset = () => {
        setFormData(initialFormState);
        setErrors({});
        setIsSubmitted(false);
    };

    return {
        formData,
        errors,
        isSubmitted,
        handleChange,
        handleSubmit,
        handleReset
    };
};
