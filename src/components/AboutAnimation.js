import React, {useState, useEffect, useRef} from 'react'
import "../styles/aboutmeparagraph.css"
const AboutAnimation = ({text}) => {
    const [currentText, setCurrentText] = useState("")
    const index = useRef(0);
    useEffect(() => {
        if (index.current < text.length) {
            const timeoutId = setTimeout(() => {
                setCurrentText((value) => value + text.charAt(index.current));
                index.current++
            },30)
        }
    }, [currentText, text])
    return (<><h3 className="aboutParaText">{currentText}</h3></>)
}
export default AboutAnimation