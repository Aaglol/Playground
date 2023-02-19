export const FormGroup = ({data, inputOnChange}) => {
    const { title = '', name, type, attribute } = data;
    return (
        <div className="form-group">
            <label className="form-group-title">{title}</label>
            <input type={type} className="form-input" name={name} autoComplete={attribute} onChange={inputOnChange} />
        </div>
    );
};
