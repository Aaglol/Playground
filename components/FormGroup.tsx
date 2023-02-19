export const FormGroup = ({title, name, type, inputOnChange}) => {

    return (
        <div className="form-group">
            <label className="form-group-title">{title}</label>
            <input type={type} className="form-input" name={name} onChange={inputOnChange} />
        </div>
    );
};
