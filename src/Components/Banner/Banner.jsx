import { useState, useEffect } from "react"
import './Banner.css'

// eslint-disable-next-line react/prop-types
function Banner({ scroll }) {

    const canvasText = '</canvas>'

    const [color, setColor] = useState('blue')
    const [scale, setScale] = useState(1)

    useEffect(() => {
        const handleScale = () => {

            const divideScroll = (window.scrollY / window.innerHeight) * 100; // reduce scroll height to value between 1 and 100

            setColor(divideScroll > 50 ? 'green' : 'blue');
            setScale(divideScroll > 50 ? 'large' : 'default');
        };
    
        window.addEventListener('scroll', handleScale);
    
        return () => window.removeEventListener('scroll', handleScale);
      }, []);

  return (
    <div className='background-img-div'>
    <div className={`planet ${ color } ${ scale }`} style={{
      top: `${ scroll * 1.85 > 110 ? 111 : scroll * 1.85 }%`,
      left: `${ scroll + 17 > 77 ? 77 : scroll + 17 }%`,
    }}>
    </div>
    <div className='banner'>
      <div className='logoDiv'>
        <span className='h1'><i>HTML</i> {canvasText} <strong>Games</strong></span>
        <div className='rocket' style={{
          left: `${ scroll * 2 > 150 ? 738 : -100 + scroll * 2 }%`,
          bottom: `${ scroll * 2 > 150 ? -81 : 80 - scroll * 2.2  }px`,
          scale: `${ scroll * 2 > 150 ? 0 : 1.5 - scroll * 0.018 }`,
          opacity: `${ 0 + scroll }`,
        }}>
        </div>
      </div>
      <div className='solarSystem' style={{
        transform: `rotate(-${ scroll * 2 > 121 ? 12 : scroll * 0.2 }deg)`,
      }}>
        <div className='sun' style={{
           "--deg": `${ scroll * 2 }deg`,
           left: `${ scroll * 2 > 121 ? 56 : 50 + scroll * 0.1 }%`,
           top: `${ scroll * 2 > 121 ? 30 : 25 + scroll * 0.08 }%`,
        }}></div>
      </div>
    </div>
  </div>
  )
}

export default Banner