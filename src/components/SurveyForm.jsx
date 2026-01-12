import Header from './Header';
import TextField from './TextField';
import RadioGroup from './RadioGroup';
import Button from './Button';
import { MOVIES } from '../assets/movies';

const SurveyForm = ({ formData, errors, handleChange, handleSubmit, handleReset }) => {
    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg max-w-lg w-full mx-auto border border-gray-100 overflow-hidden font-sans">
            <Header />

            <div className="p-8 space-y-2">
                <TextField
                    label="ชื่อ *"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="กรุณากรอกชื่อของคุณ"
                />

                <TextField
                    label="อีเมล *"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="example@email.com"
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
                    placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
                />
            </div>

            <div className="px-8 pb-8 pt-2 flex justify-between items-center bg-transparent">
                <Button type="reset" onClick={handleReset} variant="outline" className="flex items-center gap-2 text-gray-600 border-gray-300 hover:bg-gray-50 px-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    รีเซ็ต
                </Button>
                <Button type="submit" variant="primary" className="flex items-center gap-2 bg-[#7c3aed] hover:bg-[#6d28d9] px-6 shadow-md shadow-purple-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    ส่งแบบสำรวจ
                </Button>
            </div>
        </form>
    );
};
export default SurveyForm;
