/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import './Robot.css'

function Robot({ scroll }) {

    const eyeBallHeight = 70;

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [play, setPlay] = useState('paused'); 
    const [height, setHeight] = useState(0);
    const [border, setBorder] = useState('none');
    const [animation, setAnimation] = useState('none');
    const [top, setTop] = useState(50); 

    useEffect(()=>{
        const changeRobot = ()=>{
          setPlay('running');
          setHeight(10);
          setBorder('solid 1px var(--black)');
          setAnimation('rotateEars 1s infinite linear');
          setTop(25);
        };
    
        const returnToDefault = ()=>{
          setPlay('paused');
          setHeight(0);
          setBorder('none');
          setAnimation('none');
          setTop(50);
        };
    
        document.querySelector('.robotIcon').addEventListener('mouseover', changeRobot); 
        document.querySelector('.robotIcon').addEventListener('mouseout', returnToDefault);
    
        return ()=>{
            document.querySelector('.robotIcon').removeEventListener('mouseover', changeRobot);
            document.querySelector('.robotIcon').removeEventListener('mouseout', returnToDefault); 
        };
      }, []);

      useEffect(() => {
        const getMouseXY = (e) => {
          const maxX = window.innerWidth;
          const maxY = window.innerHeight;
          const divideMouseX = e.clientX / maxX; // reduce mouse X coordinate to value between 0 and 1
          const divideMouseY = e.clientY / maxY; // reduce mouse Y coordinate to value between 0 and 1
          setMouseX(divideMouseX);
          setMouseY(divideMouseY);
        };
    
        window.addEventListener('mousemove', getMouseXY);
    
        return () => window.removeEventListener('mousemove', getMouseXY);
      }, []);

      useEffect(()=>{
        const handleScroll = () => {
          setMouseX(scroll * 0.02);
          setMouseY(scroll * 0.02);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      })
  return (
    <div className='robotIcon'>
    <div className='hat'>
        <div className='hatRod'>
            <div className='rodBall' style={{
                animation: `pulseColor 0.5s infinite linear`, 
                animationPlayState: `${ play }`
            }}></div>
        </div>
    </div>
    <div className='eyes'>
        <div className='eye'>
            <div className='eyeBall' style={{
              left: `${ mouseX * 45 }%`,
              top: mouseY * 100 < eyeBallHeight ? `${mouseY * 100}%` : `70%`, 
            }}></div>
        </div>
        <div className='eye'>
            <div className='eyeBall' style={{
              left: `${ mouseX * 45 }%`,
              top: mouseY * 100 < eyeBallHeight ? `${mouseY * 100}%` : `70%`,
            }}></div>
        </div>
    </div>
    <div className='earL' style={{
        animation: `${ animation }`,
        top: `${ top }%`,
    }}></div>
    <div className='earR' style={{
        animation: `${ animation }`, 
        top: `${ top }%`,
    }}></div>
    <div className='nose'></div>
    <div className='mouth'>
        <div className='teethVertical' style={{
            height: `${ height }px`, 
            borderTop: `${ border }`, 
        }}></div>
        <div className='tooth'></div>
        <div className='tooth'></div>
        <div className='tooth'></div>
        <div className='tooth'></div>
        <div className='tooth'></div>
        <div className='tooth'></div>
    </div>
  </div>
  )
}

export default Robot