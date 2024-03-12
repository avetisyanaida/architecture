import { useState } from 'react';
import Slide from '../Slide/Slide';
import '../../styles/slide.css'
import { CgChevronRight } from "react-icons/cg";

const Slideshow = ({ slides, showDetails}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
        <div className='slideshow'>
            {slides.map((slide, index) => (
                <Slide key={index} image={slide} isActive={index === activeIndex} showDetails={showDetails}/>
            ))}
            <button className='slide-btn next' onClick={handleNextSlide}>
                <CgChevronRight />
            </button>
        </div>
        </>
        
    )
};
export default Slideshow




















