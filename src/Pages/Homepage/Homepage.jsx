import { useEffect, useState } from 'react';
import './Homepage.css';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Games from '../../Components/Games/Games';
import Footer from '../../Components/Footer/Footer';

function Homepage() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const divideScroll = (window.scrollY / window.innerHeight) * 100; // reduce scroll height to value between 1 and 100
      setScroll(divideScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(()=>{
    console.log(80 - scroll * 2.2);
  }, [scroll]);

  return (
    <section>
      <Header scroll={scroll} />
      <Banner scroll={scroll} />
      <Games scroll={scroll} />
      <Footer />
    </section>
  )
}

export default Homepage