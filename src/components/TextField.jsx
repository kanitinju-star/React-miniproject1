const TextField = ({ label, id, name, value, onChange, type = "text", error, placeholder, multiline = false }) => {
    return (
        <div className="flex flex-col gap-1 mb-4">
            <label htmlFor={id} className="font-semibold text-gray-700">
                {label}
            </label>
            {multiline ? (
                <textarea
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`border p-2 rounded-md transition-colors focus:outline-none focus:ring-2 ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                    rows={4}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`border p-2 rounded-md transition-colors focus:outline-none focus:ring-2 ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                />
            )}
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
};
export default TextField;
