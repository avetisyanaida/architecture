import React from 'react';
import Slideshow from '../Slide/SlideShow';

const SectionDetails = ({
  title,
  slides,
  image,
  content,
  buttonText,
  showState,
  handleToggle,
  handleButtonClick,
  buttonClass
}) => {
  return (
    <div className={`section ${showState ? 'show' : ''}`}>
      {showState && (
        <div className='details'>
          <p>
            {content}
          </p>
          <button className={`application ${buttonClass}`}>Оставить заявку</button>
        </div>
      )}
      <h3>{title}</h3>
      {slides && <Slideshow slides={slides} />}
      {image && <div><img src={image} alt={title} /></div>}
      {buttonText && (
        <button className={`${showState ? 'btn-text btn-active' : 'btn-text'}`} onClick={handleButtonClick}>
          {showState ? 'Скрыть' : buttonText}
        </button>
      )}
      {handleToggle && (
        <h2 onClick={handleToggle}>{title}</h2>
      )}
    </div>
  );
};
export default SectionDetails;
