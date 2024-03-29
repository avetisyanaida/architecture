import img from '../../images/man.png';
import Navbar from '../Navbar/Navbar';
import '../Developer/style.css';
import { Link } from 'react-router-dom';

const Developer = () => {
    return (
        <>
            <Navbar/>
            <div className='developer'>
                <div className='dev-info'>
                <h2>Приглашение к исследованию</h2>
                <div className='img'>
                    <img src={img}/>
                </div> 
                <p className='p1'>Слово редактора</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; Раньше мне казалось, что в каждой семье должен быть книжный шкаф, книжная стена или даже целая библиотека. Книги были чем-то магическим: до каких-то надо было дорасти, по каким-то пробежаться, чтобы вернуться к ним спустя годы, а в какие-то долго всматриваться, как в зеркало. Я всегда читал несколько произведений одновременно и на столе вырастала стопка из книг разной степени освоенности. <br/> &nbsp;&nbsp;&nbsp;&nbsp; И, глядя на RAKURS, на его необычную ломаную форму, стремящуюся вверх, я увидел стопку книг размером с дом и это не фигура речи.</p>
                <h3>Архитектура - не форма, а язык, понятный тем, кто готов читать между строк; фасады словно обложки, за которыми живут истории.</h3>
                <p>Район наполнен памятью о научно- <br/> исследовательских изысканиях прошлого: здесь и НИИ приборостроения, и Институт молекулярной генетики, тот самый институт Гамалеи и Курчатовский центр. Вокруг последного еще ссоветских времен строились престижные дома для интелектуальной элиты: инженеров, ученых, врачей. <br/> И для команды проекта было важным не разрушать этот дух, а напонить его новым прочтением. Вот клуб с лекторием и библиотекой; он словно всегда был здесь, а за его дверями дерзкие умы уже готовы схлеснуться в дискусии, будто в поэтических кружках начала 20 века. А для тех, кто только начинает писать свою историю, есть школа, где с уважением относятся к маленьким авторам. <br/> С таким же трепетом созданы все общественне пространства и их наполнение: от лавочки на детской площадке до ресторана, в котором выражение "пища для ума" обрело буквальный смысл. Архитекторам, дизайнером, озеленителям удалось сформировать среду, в которой каждый сможет реализовать свое прочтение фразы "я заню как хочу жить". <br/> Современные представления о доме выросли вместе с теми, кто вырос из своих амбиций. И мы рады представить проект, определяющий новые стандарты жизни. Проект, на который каждый может взглянуть со своего Ракурса.</p>
                <div className='button'>
                    <Link to="/" className='dev-btn'>На главную</Link>
                </div>
                </div>
                
            </div>
        </>
       
    )
}
export default Developer
