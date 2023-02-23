export const FormGroup = ({data, inputOnChange}) => {
    const { title = '', name, type, attribute, className = '' } = data;
    return (
        <div className="form-group">
            <label className="form-group-title">{title}</label>
            <input type={type} className={`form-input ${className}`} name={name} autoComplete={attribute} onChange={inputOnChange} />
        </div>
    );
};
