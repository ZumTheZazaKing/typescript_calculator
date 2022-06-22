const Button = ({className, value, onClick}: any): JSX.Element => {
    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    )
}

export default Button;