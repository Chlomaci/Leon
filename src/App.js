import WheelComponent from './Wheel';

import './App.scss';

import woman from './resources/woman.png';
import ball_left from './resources/ball-left.png';
import ball_right from './resources/ball-right.png';
import logo_ball from './resources/logo-ball.png'

function App() {
  
  return (
    <section className="main">
      <div className="main__wrapper">
        <div className="main__title">Le
        {/* <svg className="main__logo_ball" width="38" height="37"  viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.854492 18.4656C0.854492 28.6647 9.12089 36.9311 19.3201 36.9311C29.5192 36.9311 37.7856 28.6647 37.7856 18.4656C37.7856 8.2664 29.5224 0 19.3232 0C9.12401 0 0.854492 8.2664 0.854492 18.4656Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8458 0.165039C10.6024 1.00226 5.34879 4.95495 2.70018 10.4109L12.2769 8.54349L16.8458 0.165039ZM1.0942 15.5058C0.938585 16.4706 0.857666 17.4573 0.857666 18.4657C0.857666 23.7037 3.03942 28.4314 6.54393 31.7927L7.6457 22.409L1.0942 15.5058ZM11.0568 34.9829C13.5436 36.231 16.3509 36.9312 19.3201 36.9312C22.3702 36.9312 25.2491 36.1905 27.7826 34.8802L19.4664 30.9462L11.0568 34.9829ZM32.585 31.3134C35.8062 27.9894 37.7888 23.461 37.7888 18.4657C37.7888 17.5755 37.7234 16.6978 37.6021 15.8419L31.4832 22.4401L32.585 31.3134ZM35.8467 10.2179C33.2603 5.04832 28.3179 1.26059 22.4294 0.264634L26.9236 8.63686L35.8467 10.2179Z" fill="#D71A1A"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.261 27.2921L23.3973 24.2887L27.5336 21.2822L25.9556 16.4207L24.3746 11.5561H19.261H14.1505L12.5694 16.4207L10.9915 21.2822L15.1278 24.2887L19.261 27.2921Z" fill="#D71A1A"/>
        </svg> */}
        <img src={logo_ball} alt="ball" class="logo-ball"/>
          n
        </div>
        <div className="main__text">
          <div className="main__subtitle">Gira la rueda y gana</div>
          <div className="main__subtitle_violet">fantásticos premios</div>
        </div>
        <img src={woman} alt="woman" className="main__woman"/>
        <img src={ball_left} alt="" className="main__ball_left"/>
        <img src={ball_right} alt="" className="main__ball_right"/>
        
          <WheelComponent/>
      
      </div>
    </section>
  );
}

export default App;
