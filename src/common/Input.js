const Input = ({ label, name, formik, type = "text" }) => {
    return (
        <div className="flex flex-col mb-4 text-left">
            <label className="mb-1 font-bold">{label}</label>
            <input
                className="bg-slate-100 p-2 w-60 sm:w-80 rounded-md outline-1 outline-blue-200"
                type={type}
                name={name}
                {...formik.getFieldProps({ name })}
            />
            {formik.errors[name] && formik.touched[name] &&
                <span className="text-sm text-red-500 mt-1">
                    {formik.errors[name]}
                </span>
            }
        </div>
    );
}

export default Input;