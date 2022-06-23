import '../styles/Button.css'
import React from 'react'

type ButtonProps = {
    className: string, 
    value: string | number, 
    onClick: (e: any) => void
}

const Button = ({className, value, onClick}: ButtonProps): JSX.Element => {
    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    )
}

export default Button;