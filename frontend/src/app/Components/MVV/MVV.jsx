import Image from 'next/image';
import './MVV.css'
// import dentistworking from '../../assets/dentistworking.png'
// import teethcloseup from '../../assets/teethcloseup.png'
// import scanimg from '../../assets/scanimg.png'
// import missionicon from '../../assets/icons/mission-icon.png'
// import visionicon from '../../assets/icons/vision-icon.png'
// import valuesicon from '../../assets/icons/values-icon.png'


const MVV = () => {
  return (
    <div className='mvv'>
        
        <div className='submvv'>
        <Image src={'/images/dentistworking.jpg'} alt='dentist working' width={400} height={400}/>
        <div className="caption">
            <Image src={'/images/mission-icon.png'}alt='mission icon' width={60} height={60}/>
            <p>0ur mission is simple yet profound: to bridge the gap between quality dental care and affordable solutions by harnessing the potential of the Indian dental market.</p>
        </div>
        </div>

        <div className='submvv'>
        <Image src={'/images/teethcloseup.png'} alt='teeth closeup' width={400} height={400}/>
        <div className="caption">
            <Image src={'/images/vision-icon.png'} alt='vision icon'width={60} height={60}/>
            <p>Our aim is to elevate service standards through innovative approaches by enhancing oral health results while fostering cultural exchange.</p>
        </div>
        </div>

        <div className='submvv'>
        <Image src={'/images/scanimg.png'} alt='scan image'width={400} height={400}/>
        <div className="caption">
            <Image src={'/images/values-icon.png'}alt='values icon' width={80} height={60}/>
            <p>Our commitment lies in delivering service excellence.</p>
        </div>
        </div>
    </div>
  )
}

export default MVV;