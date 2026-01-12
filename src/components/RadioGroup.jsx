const RadioGroup = ({ label, name, options, selectedValue, onChange, error }) => {
    return (
        <div className="flex flex-col gap-2 mb-4">
            <span className="font-semibold text-gray-700">
                {label.includes('*') ? (
                    <>
                        {label.replace('*', '')}
                        <span className="text-red-500">*</span>
                    </>
                ) : (
                    label
                )}
            </span>
            <div className="flex flex-col gap-1">
                {options.map((option) => (
                    <label key={option.title} className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                        <input
                            type="radio"
                            name={name}
                            value={option.title}
                            checked={selectedValue === option.title}
                            onChange={onChange}
                            className="accent-blue-600 w-5 h-5 cursor-pointer mt-0.5"
                        />
                        <div className="flex flex-col">
                            <span className="text-gray-800 font-medium">
                                {option.title} <span className="text-gray-500 font-normal text-sm">({option.year})</span>
                            </span>
                            <span className="text-gray-500 text-sm">
                                Director: {option.director}
                            </span>
                        </div>
                    </label>
                ))}
            </div>
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
};
export default RadioGroup;
