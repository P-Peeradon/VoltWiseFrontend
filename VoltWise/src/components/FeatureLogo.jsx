import React from 'react'
import { ReactSVG } from 'react-svg';

const FeatureLogo = ({ logoFileName, tone }) => {
    const backgroundColor = {
        green: "bg-green-500/20",
        yellow: "bg-yellow-600/20"
    }

    const lineColor = {
        green: "bg-green-800",
        yellow: "bg-yellow-800"
    }

    return (
        <div className={`w-14 h-14 left-10 top-10 absolute bg-${backgroundColor[tone]}/20 rounded-4xl flex justify-center items-center`}>
            <ReactSVG 
                src={logoFileName}
                className={`w-6 h-6 text-${lineColor[tone]}`} // This targets the 'lines'
                beforeInjection={(svg) => {
                    // This ensures the SVG scales to your w-6 h-6 classes
                    svg.setAttribute('class', 'w-full h-full');
                    
                    // If you want to target the internal 'background' of the SVG file specifically:
                    const bgPart = svg.querySelector('.svg-bg-part'); 
                    if (bgPart) bgPart.classList.add(`fill-${backgroundColor[tone]}`);
                }}
            />
            </div>
    )
}

export default FeatureLogo
