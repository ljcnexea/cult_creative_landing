import PropTypes from "prop-types";

const FormInput = ({ label, name, type, color = "#F4F4F4", field, errors, placeholder, ...others }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-700">
        {label}
      </label>
      <div className="mt-2">
        {type === "textarea" ? (
          <textarea
            id={name}
            {...field}
            {...others}
            placeholder={placeholder}
            rows="4"
            className={`block w-full rounded-md border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 placeholder:italic focus:outline-none sm:text-sm sm:leading-6 bg-[${color}] ${
              errors ? "border-red-500" : "border-gray-300"
            }`}
          />
        ) : (
          <input
            type={type}
            id={name}
            {...field}
            {...others}
            placeholder={placeholder}
            className={`block w-full rounded-md border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 placeholder:italic focus:outline-none sm:text-sm sm:leading-6 bg-[${color}] ${
              errors ? "border-red-500" : "border-gray-300"
            }`}
          />
        )}
        {errors && <p className="text-red-500 text-xs mt-1">{errors}</p>}
      </div>
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
  field: PropTypes.object.isRequired,
  errors: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormInput;
