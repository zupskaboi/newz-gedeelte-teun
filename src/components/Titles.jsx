import React from "react";
import '../style/components/Titles.scss'

// Dit is een component die het mogelijk maakt om <h1>, <h2>, <h3> en <h4> aan te roepen in een ander pagina 

export const Title = (props) => {
    return (
        <div className="Title">
            <h1>{props.text}</h1>
        </div>
    )
}

export const Heading1 = (props) => {
    return (
        <div className="Heading1">
            <h2>{props.text}</h2>
        </div>
    )
}

export const Heading1White = (props) => {
    return (
        <div className="Heading1White">
            <h2>{props.text}</h2>
        </div>
    )
}

export const Heading2Black = (props) => {
    return (
        <div className="Heading2Black">
            <h3>{props.text}</h3>
        </div>
    )
}

export const Heading2White = (props) => {
    return (
        <div className="Heading2White">
            <h3>{props.text}</h3>
        </div>
    )
}

export const Heading2Red = (props) => {
    return (
        <div className="Heading2Red">
            <h3>{props.text}</h3>
        </div>
    )
}

export const Heading3 = (props) => {
    return (
        <div className="Heading3">
            <h4>{props.text}</h4>
        </div>
    )
}

export const Heading3White = (props) => {
    return (
        <div className="Heading3White">
            <h4>{props.text}</h4>
        </div>
    )
}

export const Heading3Red = (props) => {
    return (
        <div className="Heading3Red">
            <h4>{props.text}</h4>
        </div>
    )
}

export const VideoTitle = (props) => {
    return (
        <div className="VideoTitle">
            <h1>{props.text}</h1>
        </div>
    )
}

export const VideoSource = (props) => {
    return (
        <div className="VideoSource">
            <h5>{props.text}</h5>
        </div>
    )
}

export const VideoDescription = (props) => {
    return (
        <div className="VideoDescription">
            <h3>{props.text}</h3>
        </div>
    )
}