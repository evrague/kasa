import React from "react";


export default function Tirroir({title, content, visible, toggleVisible, equipements }){
    return (
        <>
            <div className="tirroire flex">
                <p>{title}</p>
                <img 
                    style={{ transform : visible ? 'rotate(180deg)' : ' ' }} 
                    width="20" 
                    height="20" 
                    onClick={toggleVisible}
                    src="https://img.icons8.com/metro/20/FFFFFF/collapse-arrow.png" 
                    alt="collapse-arrow"
                />      
            </div>
            
            {visible && (
                <div className="coprs-tirroir">
                    {content && <p>{content}</p>}
                    {equipements && equipements.length > 0 && (
                        <ul>
                            {equipements.map((equip, i) => (
                                <li key={i}>{equip}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </>
    )
}