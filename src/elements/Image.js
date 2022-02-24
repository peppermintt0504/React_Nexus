import styled from 'styled-components';
import React from "react";

const Image = ({
    src,

    width, height, margin, padding,

    onClick,
    ...props}) => {


    return (
        <img onClick={onClick} src={src} style={...props, width, height, margin, padding }></img>
    )
}


export default Image;