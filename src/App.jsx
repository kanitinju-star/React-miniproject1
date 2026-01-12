import { useSurveyForm } from './utils/useSurveyForm';
import SurveyForm from './components/SurveyForm';
import ResultDisplay from './components/ResultDisplay';
import './App.css';

function App() {
  const {
    formData,
    errors,
    isSubmitted,
    handleChange,
    handleSubmit,
    handleReset
  } = useSurveyForm();

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
