import React, { useEffect, useState } from 'react';
import sec1 from '../../images/sec1.jpg';
import rakurs from '../../images/rakurs.png';
import '../../styles/section.css';
import '../../styles/@media.css';
import arc1 from '../../images/arc1.png';
import arc2 from '../../images/arc2.png';
import arc4 from '../../images/arc6.png';
import planImg from '../../images/plan.png';
import designImg from '../../images/design.png';
import stoneImg from '../../images/stone.jpg';
import gardenSchool1 from '../../images/garden1.jpg';
import gardenSchool2 from '../../images/garden2.jpg';
import gardenSchool3 from '../../images/garden3.png';
import gardenSchool4 from '../../images/garden4.jpg';
import gardenSchool5 from '../../images/garden5.jpg';
import { CgChevronUp, CgChevronDown } from 'react-icons/cg';
import Shops from '../Shops/Shops';
import shop from '../../utils/loc-images/shop.svg';
import cafe from '../../utils/loc-images/cafe.svg';
import education from '../../utils/loc-images/education.svg';
import health from '../../utils/loc-images/health.svg';
import park from '../../utils/loc-images/park.svg';
import transport from '../../utils/loc-images/transport.svg';
import sport from '../../utils/loc-images/sport.svg'
import Location from '../Location/Location';
import SectionDetails from '../SectionDetails/SectionDetails';
import AllForm from '../Form/Form';
import SectionContent from '../SectionContent/SectionContent';



const Section = () => {
  const categories = [
    { icon: shop, span: 'Шопинг' },
    { icon: sport, span: 'Спорт' },
    { icon: park, span: 'Паркы' },
    { icon: health, span: 'Здоровье' },
    { icon: cafe, span: 'Кафе и рестораны' },
    { icon: shop, span: 'Шопинг' },
    { icon: transport, span: 'Транспорт' },
    { icon: education, span: 'Образование' },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const arcSlides = [arc1, arc2, arc4];
  const gardenSchools = [gardenSchool1, gardenSchool2, gardenSchool3, gardenSchool4, gardenSchool5];
  const [showDesign, setShowDesign] = useState(false);
  const [showStone, setShowStone] = useState(false);
  const [showGarden, setShowGarden] = useState(false);

  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  const handleDesignClick = () => {
    setShowDesign(!showDesign);
  };

  const handleStoneClick = () => {
    setShowStone(!showStone);
  };

  const handleGardenClick = () => {
    setShowGarden(!showGarden);
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="scrollSection" className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="cont">
          <div className="rakurs">
            <img src={rakurs} alt="Rakurs" />
            <p>
              Актуальный проект, в котором <br />
              хочется быть, а не казаться
            </p>
          </div>
        </div>
        <div className="sec1">
          <h3>
            Жизнь <br />
            бизнес-класса
          </h3>
          <img src={sec1} alt="Section 1" />
        </div>
        <div className="sec2">
          <div>
            <small>Вступительное письмо</small>
            <p>
              &laquo;Современные представление о доме выросли вместе с теми, кто вырос из своих
              амбиций. И мы рады представить проект , определящий новые стандарты комфортной
              жизни.&raquo;
            </p>
          </div>
          <div className="read">
            <a href="#">Читать</a>
          </div>
        </div>
        <div id="sec3">
          <Shops title="Локация" categories={categories} />
          <Location />
        </div>
        <div className={`sec4 ${expanded ? 'expanded' : ''}`}>
          <h3>О Районе</h3>
          <div className="scrollable-content" style={{ height: expanded ? '547px' : '430px' }}>
            <p>
              Район наполнен памятью о научно-исследовательских изысканиях прошлого: здесь и НИИ
              приборострения, и Институт молекулярной генетики, тот самый институт Гамалеи и
              Курчатовский центр Rakurs находится
            </p>
          </div>
        </div>
        <button className="sec4-btn" onClick={toggleExpanded}>
          {expanded ? <CgChevronUp /> : <CgChevronDown />}
        </button>

        <SectionDetails
          title="Архитектура"
          slides={arcSlides}
          content='Восприятие слова "дом" вышло за границы квартиры. И в основу идеи организации
          территории лёг принцип визуального размытия границ. Зелень и стилистика
          дизанйнерских решений объектов выступают проводником для взгляда, скользящего через
          двухуровневую детскую площадку, круглогодичную спортивную зону. Взгляд задерживается
          на террасе для отдыха и прямиком через шепот гравия под навес "тихого места" для
          работы или обеда на свежем воздухе.'
          showState={showDetails}
          handleToggle={handleDetailsClick}
          handleButtonClick={handleDetailsClick}
          buttonText="Подробнее"
          buttonClass='app-sec5'
        />

        <div className="sec6">
          <h3>Мастерплан</h3>
          <div className='plan'>
            <img src={planImg} />
          </div>
        </div>


        <SectionContent
          sectionContent='section-content'
          title="Дизайн среды"
          text="Восприятие слова 'дом' вышло за границы квартиры. И в основу идеи организации территории лёг принцип визуального размытия границ. Зелень и стилистика дизайнерских решений объектов выступают проводником для взгляда, скользящего через двухуровневую детскую площадку, круглогодичную спортивную зону. Взгляд задерживается на террасе для отдыха и прямиком через шепот гравия под навес 'тихого места' для работы или обеда на свежем воздухе."
          paragraph='design-p'
          contentStyle='content'
          imgSrc={designImg}
          imgClass='img-sec7'
          buttonClass="app-sec7"
          showState={showDesign}
          handleButtonClick={handleDesignClick}
        />

        <SectionContent
          sectionContent='section-content1'
          title='Как мы озеленяем общественные пространства'
          text='Взаимадействие с природой - естественная потребность человека. Качество - количество
            этой связи, незримо, но верно влияют на настроение, с которым мы начинаем,
            продолжаем или заканчиваем день. Биофильный дизайн построен на нюансах зеленого;
            растение подобраны к зданиям по форме листьев, чтобы играть с фактурой фасадов при
            каждом удобном слуцахе. А сами здания укоренились в общем ландшафте в роли
            &laquo;вековых деревьев&raquo;'
          paragraph='green-p'
          contentStyle='green-content'
          imgSrc={stoneImg}
          imgClass='img-sec8'
          buttonClass='app-sec8'
          showState={showStone}
          handleButtonClick={handleStoneClick}
        />

        <SectionDetails
          title="Сад и школа"
          slides={gardenSchools}
          content='Свет - так, одним словом, опишем образовательный центр, расположенный через аллею от
          дома. В просторном здании соседствуют пространства для дошкольников, где они могут
          начать свои маленькие исследования жизни, и школа, для учеников с 1 по 4 класс.'
          showState={showGarden}
          handleToggle={handleGardenClick}
          handleButtonClick={handleGardenClick}
          buttonText="Подробнее"
          buttonClass='app-sec9'
        />

        <div id="sec10">
          <AllForm />
        </div>
      </div>
    </section>
  );
};
export default Section;
