import * as React from "react";

const SearchOutlinedIcon = (props)=> {
    return (
        <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="30"
            width="30"
            {...props}
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={32}
                d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={32}
                d="M338.29 338.29L448 448"
            />
        </svg>
    );
}

export default SearchOutlinedIcon;
