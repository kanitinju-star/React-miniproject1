import { useState } from 'react';
import SurveyForm from './components/SurveyForm';
import ResultDisplay from './components/ResultDisplay';
import { validateEmail, validateRequired } from './utils/validation';
import './App.css';

function App() {
  const initialFormState = {
    name: '',
    email: '',
    movie: '',
    comment: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user types
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

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {isSubmitted ? (
        <ResultDisplay data={formData} onReset={handleReset} />
      ) : (
        <SurveyForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
        />
      )}
    </div>
  );
}

export default App;
