import './Hero.css'

// import heroImage from '../../assets/dentistbg.jpg';

const Hero = ({src}) => {
  return (
      
    <div style={{ backgroundImage: `url(${src})` }} className='hero'></div>
  );
}

export default Hero;


