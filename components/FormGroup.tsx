export const FormGroup = (props: {data: {
    title: string,
    name: string,
    type: string,
    attribute: string,
    className: string,
}, inputOnChange: any}) => {
    const { title = '', name, type, attribute, className = '' } = props.data;
    return (
        <div className="form-group">
            <label className="form-group-title">{title}</label>
            <input type={type} className={`form-input ${className}`} name={name} autoComplete={attribute} onChange={props.inputOnChange} />
        </div>
    );
};
