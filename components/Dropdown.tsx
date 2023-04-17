import { useState } from "react";
import Link from "next/link";
import { DropdownItem } from "@/store/types";

export const Dropdown = (props: {buttonText: string, items: Array<DropdownItem>, isActive: string}) => {

    const [isOpen, setIsOpen] = useState(false);
   
    return (
        <div className="dropdown">
            <div className="dropdown-tiitle" onClick={() => setIsOpen(!isOpen)}>
                {props.buttonText}
            </div>

            {isOpen && (
                <div className="dropdown-container">
                    {props.items.map((item, key) => (
                        <Link 
                            key={key}
                            href={item.href}
                            className={`dropdown-item ${props.isActive === item.href ? 'active' : ''}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};