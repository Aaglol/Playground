import { FormEventHandler } from "react";

export const Button = (props: {title: string, onClick: FormEventHandler<HTMLFormElement> | any, type: string}) => {
    
    if (props.title === '') {
        return null;
    }
    
    return (
        <button className={`p-button button-${props.type ?? 'success'}`} onClick={(e) => props.onClick(e)}>
            {props.title}
        </button>
    );
}
