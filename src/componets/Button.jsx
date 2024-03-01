import React from 'react';

const Button = ({ children, ...props }) => {
    return(
        <button className="rounded-xl flex items-center gap-x-3 px-8" >{children}</button>

    );
};
export default Button;
