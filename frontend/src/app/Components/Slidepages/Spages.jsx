'use client';

import React, { useRef } from 'react'
import './Spages.css'
// ›‹ <- arrow icons
import Title from '../Title/Title.jsx';
import Paragraph from '../Paragraph/Paragraph.jsx';
// import handshake from '../../assets/handshake.png'
// import teeth from '../../assets/treatment-teeth.png'
// import bed from '../../assets/bed.png'

const Spages = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx <= -50) {
            tx = 0;
        } else {
            tx -= 33.3333;
        }
        
        slider.current.style.transform = `translateX(${tx}%)`;
        slider.current.style.transition = 'transform 0.5s ease-in-out';
    }

    const slideBackward = () => {
        if (tx >= 0) {
            tx = -66.66; // Jump to last slide
        } else {
            tx += 33.33;
        }
    
        
        slider.current.style.transform = `translateX(${tx}%)`;
        slider.current.style.transition = 'transform 0.5s ease-in-out';
    }
       

  return (
    <div className="spages">
        <div className=''><Title title='The Walkthrough'/></div>
        <button className='nextbtn' onClick={slideForward}>›</button>
        <button className='backbtn' onClick={slideBackward}>‹</button>
        <div className="slider">
        <ul ref={slider}>
            <li> {/* initial phase */}
                <div className="slide">
                <div className="stagetitles">
        <Title title='' subtitle='1. Initial Phase'/>
         <center><img src={'/images/handshake.png'}/></center>
        </div>
        <div className="howparagraphs">
          <div className="howpg">
            <Paragraph title='Customisation' content={
              <>
              You can choose your preferred city. We'll suggest the most suitable clinic in your city, and provide a cost estimate.
              <br />
              Fill out our online inquiry form, indicating the treatment you require. Your information, protected by our privacy policy, must be up to date.
              <br />
              IDR will review your request and reach out to you, and organise a 30-minute online consultation with the dentist.
            </>
            }
            />
        </div>
        <div className="howpg">
        <Paragraph title='Quotation and Proposal' content={
           <>
           We'll tailor your service to your needs, including the duration of your stay and accomodation (for you and company). You treatment plan will be finalised after you consult the dentist.
           <br />

  
         </>
        }
        />
        </div>
        <div className="howpg">
        <Paragraph title='The Decision' content={
           <>
           You can carefully review your quote and confirm your booking. A $50 confirmation feee will be required, and a 30-minute consultation with your dentist will be booked.
  
         </>
        }
        />
        </div>

        <div className="howpg">
        <Paragraph title='Travel Preparation and Assistance' content={
           <>
           We prepare your itinerary for you as you get ready for your trip. We'll help you get an e-visa, convenient flights and airport transport.
  
         </>
        }
        />
        </div>


       </div> 

                </div>
            </li>

            <li> {/* treatment phase */}
                <div className="slide">
                <div className="stagetitles">
        <Title title='' subtitle='2. Treatment Phase'/>
         <center><img src={'/images/treatment-teeth.png'}/></center>
        </div>
        <div className="howparagraphs">
          <div className="howpg">
            <Paragraph title='Day 1' content="Your facilitator will greet you and transport you to the hotel. They'll get you a local SIM and create a WhatsApp group for easy communication."
            />
        </div>
        <div className="howpg">
        <Paragraph title='Day 2' content='Your facilitator will accompany your trip to the dental clinic, where you needs will be evaluated, and your treatment plan will be set in stone. These ARE subject to adjustments.'
        />
        </div>
        <div className="howpg">
        <Paragraph title='Day 3-5' content='Throughout your treatment, your facilator will ensure you are comfortable and well-informed. They will also guide you around the city. At this point, your payment to the dentist should be complete.'
        />
        </div>

        <div className="howpg">
        <Paragraph title='Day 6' content='Your treatment should be over. Enjoy another day visiting local gems.'
        />
        </div>

        <div className="howpg">
        <Paragraph title='Day 7' content='Our faciliator will either drop you off at the airport, or will help you plan your onward journey. Our premium service ends here. This assumes but does not require a 7-day retreat.'
        />
        </div>


       </div> 

                </div>
            </li>

            <li> {/* post-treatment phase */}
                <div className="slide">
                <div className="stagetitles">
        <Title title='' subtitle='3. Post-treatment'/>
         <center><img src={'/images/bed.png'}/></center>
        </div>
        <div className="howparagraphs">
        <div className="howpg">
            <Paragraph title='Rest like a royal' content='Travelling is tiring. Come back home, rest, enjoy your beautiful teeth. You deserve it.'
            />
        </div>
          <div className="howpg">
            <Paragraph title='Follow-up Care' content='Our commitment to your dental health extends beyond your visit. After your retreat is over, your dentist will privde post-operative instructions and will schedule follow-up consultations to monitor your healing and address your concerns.'
            />
        </div>
       


       </div> 

                </div>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Spages