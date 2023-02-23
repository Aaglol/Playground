import { FunctionComponent } from "react"


export const TabHeader = ({
    items, handleOnClick, isActive
}) => (
    <div>
        <div className="tab-header"> 
            {items.map((item, key) => (
                <div 
                    className={`tab-header-item cursor-pointer ${isActive === item.id ? 'active' : ''}`} 
                    onClick={() => handleOnClick(item.id)}
                    key={key}
                >
                    {item.title}
                </div>
            ))}

        </div>
        <hr />
    </div>
);