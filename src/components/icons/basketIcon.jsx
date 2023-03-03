const BasketIcon = ({props})=>{
    return (
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="30"
            width="30"
            {...props}
        >
            <path d="M10 21 A1 1 0 0 1 9 22 A1 1 0 0 1 8 21 A1 1 0 0 1 10 21 z" />
            <path d="M21 21 A1 1 0 0 1 20 22 A1 1 0 0 1 19 21 A1 1 0 0 1 21 21 z" />
            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
        </svg>
    );
}
export default BasketIcon ;