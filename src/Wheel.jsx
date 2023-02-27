
import { useState } from 'react';

import Popup from './Popup';

import './wheel.scss'
import button from './resources/button.png'
import active from './resources/border-active.png';


const WheelComponent = () => {

    const arrayRange = (start, stop, step) =>
        Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
        );
    const degArr = arrayRange(45, 720, 45);
    const randElem = Math.round(Math.random() * (degArr.length - 1));

    const [number, setNumber] = useState(degArr[randElem]);

   let degree = number;
    if (number > 360){
        degree = number % 360;
    }

    const [prizeText, setPrizeText] = useState('Te espera un bono de hasta S/.1,000!');
    
    const rotateWheel = () => {
        const container = document.querySelector('.wheel__container');
        setNumber(number + degArr[randElem])
        if (number > 360){
            degree = number % 360;
        }
        
        const popup = document.querySelector('.overlay');

        container.style.transform = 'rotate(' + number + 'deg)';

        switch (true){
            case degree < 45 || degree === 360:
                setPrizeText("Te espera 2x sin ninguna ganancia ");
                break;
            case degree >= 45 && degree < 90:
                setPrizeText("Te espera 25 giros gratis");
                break;
            case degree >= 90 && degree < 135:
                setPrizeText("Te espera 50 giros gratis");
                break;
            case degree >= 135 && degree < 180:
                setPrizeText("Te espera 300 bono soles");
                break;
            case degree >= 180  && degree < 225:
                setPrizeText("Te espera 1000 bono soles");
                break;
            case degree >= 225  && degree < 270:
                setPrizeText("Te espera 25 giros gratis");
                break;
            case degree >= 270  && degree < 315:
                setPrizeText("Te espera 300 bono soles");
                break;
            case degree >= 315:
                setPrizeText("Te espera 50 giros gratis");
                break;
            default:
                console.log('default case');
        }

        console.log('number ' + number)
        console.log('degree ' + degree)

        setTimeout(() => {
            popup.classList.add('active')
        }, 5000)
    }


    return (
        <>
        <div className="wheel">
            <div className="wheel__bg">
                <div className="circle__inner"></div>
                <div className="wheel__container">
                    <div id="one" className="red">
                        <span className="number">2x sin</span>
                        <span className="prize">ninguna</span>
                        <span className="prize">ganancia</span>
                    </div>
                    <div id="two" className="beige">
                        <span className="number">50</span>
                        <span className="prize">giros</span>
                        <span className="prize">gratis</span>
                    </div>
                    <div id="three" className="red">
                        <span className="number">300</span>
                        <span className="prize">bono</span>
                        <span className="prize">soles</span>
                    </div>
                    <div id="four" className="beige">
                        <span className="number">25</span>
                        <span className="prize">giros</span>
                        <span className="prize">gratis</span>
                    </div>
                    <div id="five" className="red">
                        <span className="number">1000</span>
                        <span className="prize">bono</span>
                        <span className="prize">soles</span>
                    </div>
                    <div id="six" className="beige">
                        <span className="number">300</span>
                        <span className="prize">bono</span>
                        <span className="prize">soles</span>
                    </div>
                    <div id="seven" className="red">
                        <span className="number">50</span>
                        <span className="prize">giros</span>
                        <span className="prize">gratis</span>
                    </div>
                    <div id="eight" className="beige">
                        <span className="number">25</span>
                        <span className="prize">giros</span>
                        <span className="prize">gratis</span>
                    </div>
                </div>
            <img src={button} alt="" className='wheel__button' onClick={rotateWheel}/>
            <img src={active} alt="" className='wheel__active'/>
            </div>
        </div>
    <Popup prize={prizeText}/>
        </>
    )
}


export default WheelComponent;
