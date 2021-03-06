import React from "react";
import style from "styled-components";
import PropTypes from "prop-types";

const getStyle = type => {
    if (type === "primary") {
        return `
            background: #0099FF;
            color: #FDFDFD;
        `;
    }
    if (type === "error") {
        return `
            background: #FF8080;
            color: #FDFDFD;
        `;
    }
    if (type === "success") {
        return `
            background: #00CC99;
            color: #FDFDFD;
        `;
    }
    if (type === "warning") {
        return `
            background: #FFFF00;
            color: #FDFDFD;
        `;
    }
    return `
        background: #FDFDFD;
        border: 1px solid #DCDCDC
        color: #333333;
    `;
}

const getSize = size => {
    if (size === "sm") {
        return "padding: .2rem .5rem";
    }
    if (size === "md") {
        return "padding: .5rem .7rem";
    }
    if (size === "lg") {
        return "padding: 1rem 1.2rem";
    }
    if (size === "bg") {
        return "padding: 1.2rem 1.5rem";
    }
}

const ButtonStyle = style.button`
    border: none;
    border-radius: ${({ round }) => round ? "5px" : null};
    cursor: pointer;
    ${({ type }) => getStyle(type)}
    ${({ size }) => getSize(size)}
`;

const Button = ({ children, round, size, type }) => <ButtonStyle round={ round } size={ size } type={ type }>{ children }</ButtonStyle>;

Button.defaultProps = {
    round : true,
    size : "sm",
    type : "default"
}

Button.propTypes = {
    /** Deixar o botão redondo  */
    round : PropTypes.bool,
    /** Definir o tamanho do botão  */
    size : PropTypes.string,
    /** Definir o estilo do botão  */
    type : PropTypes.string
}

export default Button;