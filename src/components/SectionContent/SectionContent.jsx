import React from 'react';

const SectionContent = ({ title, text, imgSrc, buttonClass, showState, handleButtonClick, imgClass, paragraph, contentStyle, sectionContent }) => {
  return (
    <div className={`${sectionContent}  ${showState ? 'show-content' : ''}`}>
      {showState && (
        <div className={contentStyle}>
          <p className={paragraph}>{text}</p>
          <button className={`application ${buttonClass}`} onClick={handleButtonClick}>
            Оставить заявку
          </button>
        </div>
      )}
      <h2>{title}</h2>
      <div>
        <img className={imgClass} src={imgSrc} alt={title} />
      </div>
      <div></div>
      <button
        className={`btn-content ${showState ? 'content-active' : ''}`}
        onClick={handleButtonClick}
      >
        {showState ? 'Скрыть' : 'Подробнее'}
      </button>
    </div>
  );
};

export default SectionContent;
