import Link from "next/link";


export const TabHeader = ({
    items
}) => (
    <div className="tab-header"> 
        {items.map((item, key) => {
            let isActive = false;
            if (typeof window !== 'undefined') {
                window.location.pathname;
            }
            return (
            <Link 
                className={`tab-header-item cursor-pointer ${isActive === item.href ? 'active' : ''}`} 
                href={item.href}
                key={key}
            >
                {item.title}
            </Link>
        )})}

    </div>
);