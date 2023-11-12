import { useState, useEffect } from "react"
import './Banner.css'

// eslint-disable-next-line react/prop-types
function Banner({ scroll }) {

  const canvasText = '</canvas>'

  const [color, setColor] = useState('blue')
  const [scale, setScale] = useState(1)

  const planetStyle = {
    top: `${scroll * 1.85 > 110 ? 111 : scroll * 1.85}%`,
    left: `${scroll + 17 > 77 ? 77 : scroll + 17}%`,
  };
  
  const rocketStyle = {
      left: `${scroll * 2 > 150 ? 738 : -100 + scroll * 2}%`,
      bottom: `${scroll * 2 > 150 ? -81 : 170 - scroll * 2.2}px`,
      transform: `scale(${scroll * 2 > 150 ? 0 : 1.5 - scroll * 0.018})`,
      opacity: `${0 + scroll}`,
  };
  
  const solarSystemStyle = {
      transform: `rotate(-${scroll * 2 > 121 ? 12 : scroll * 0.2}deg)`,
      opacity: `${scroll * 2 < 50 ? 0 : scroll * 0.2}`,
      transition: 'all 5s',
  };

    useEffect(() => {
      let animationFrameId;
  
      const handleScale = () => {
          animationFrameId = requestAnimationFrame(() => {
              const divideScroll = (window.scrollY / window.innerHeight) * 100;
              setColor(divideScroll > 50 ? 'green' : 'blue');
              setScale(divideScroll > 50 ? 'large' : 'default');
          });
      };
  
      window.addEventListener('scroll', handleScale);
  
      return () => {
          window.removeEventListener('scroll', handleScale);
          cancelAnimationFrame(animationFrameId);
      };
  }, []);
  

  return (
    <div className='background-img-div'>
    <div className={`planet ${ color } ${ scale }`} style={planetStyle}>
    </div>
    <div className='banner'>
      <div className='logoDiv'>
        <span className='h1'><i>HTML</i> {canvasText} <strong>Games</strong></span>
        <div className='rocket' style={rocketStyle}>
        </div>
      </div>
      <div className='solarSystem' style={solarSystemStyle}>
        <div className='sun' style={{
           "--deg": `${ scroll * 2 }deg`,
           left: `${ scroll * 2 > 121 ? 56 : 50 + scroll * 0.1 }%`,
           top: `${ scroll * 2 > 121 ? 30 : 25 + scroll * 0.08 }%`,
           transition: 'all 4s',
        }}></div>
      </div>
    </div>
  </div>
  )
}

export default Banner