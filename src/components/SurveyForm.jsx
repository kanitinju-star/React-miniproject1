import TextField from './TextField';
import RadioGroup from './RadioGroup';
import Button from './Button';
import { MOVIES } from '../constants/movies';

const SurveyForm = ({ formData, errors, handleChange, handleSubmit, handleReset }) => {
    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full mx-auto border border-gray-100">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Movie Survey</h1>

            <TextField
                label="ชื่อ *"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="กรอกชื่อของคุณ"
            />

            <TextField
                label="อีเมล *"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="name@example.com"
            />

            <RadioGroup
                label="เลือกหนังที่คุณชอบ *"
                name="movie"
                options={MOVIES}
                selectedValue={formData.movie}
                onChange={handleChange}
                error={errors.movie}
            />

            <TextField
                label="ความคิดเห็นเกี่ยวกับหนัง"
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                multiline={true}
                placeholder="พิมพ์ความคิดเห็นเกี่ยวกับหนังที่นี่..."
            />

            <div className="flex gap-4 mt-6">
                <Button type="reset" variant="secondary" onClick={handleReset} className="flex-1">
                    Reset
                </Button>
                <Button type="submit" variant="primary" className="flex-1">
                    Submit
                </Button>
            </div>
        </form>
    );
};
export default SurveyForm;
