import React, { useState } from "react";
import useCollapse from "react-collapsed";
import "./Blogcard.css";

function Blogcard({ item }) {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    return (
        <div className="blogcard">
            <img
                src={item.img}
                alt="blogRelatedImages"
                className="blogImages"
            />
            <div className="blogcard_body">
                <h2>{item.heading}</h2>
                <p>{item.para} </p>
                <p {...getCollapseProps()}>{item.show} </p>
                <button
                    {...getToggleProps({
                        onClick: () =>
                            setExpanded((prevExpanded) => !prevExpanded),
                    })}
                >
                    {isExpanded ? "Read Less" : "Read More"}
                </button>
            </div>
        </div>
    );
}

export default Blogcard;
