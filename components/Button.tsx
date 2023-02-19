export const Button = ({title, onClick, type = 'success'}) => {
    
    if (title === '') {
        return 'Title must be set';
    }
    
    return (
        <button className={`p-button button-${type}`} onClick={(e) => onClick(e)}>
            {title}
        </button>
    )
}