import React from 'react'

type Props = {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    ButtonColor: string;
}

const Button = (props: Props) => {
    return (
        <button type="button" className={'btn btn-' + props.ButtonColor} disabled={props.disabled} onClick={props.onClick}>
            {props.text}
            <span className="visually-hidden">Loading...</span>
        </button>

    )
}

export default Button;