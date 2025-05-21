import Hero from "@/app/Components/Hero/Hero";
import Image from "next/image";
import Paragraph from "@/app/Components/Paragraph/Paragraph";
import Spages from "@/app/Components/Slidepages/Spages";
import './page.css'; // Import your CSS file here
import Faq from "@/app/Components/FAQ/Faq";


export default function how() {

  return (
    <div className="py-20">
       <Hero src='/images/how-hero.jpg'/> 
     <div className="relative z-50 text-white text-center translate-y-[-32rem] text-7xl font-bold text-shadow-[2px_2px_4px_#186466] text-round">
          <h2>How it works</h2>
          
        </div>
       <div className='pgphp'><div className="relative z-50 w-full flex justify-center translate-y-[-28rem]">
  <div className="text-white text-center text-3xl font-medium text-shadow-[2px_2px_4px_#186466] max-w-[920px] px-4">
    <Paragraph
      className="text-5xl text-white"
      content="From beginning to end, we have your back. We'll help you choose your city, treatment and clinic, and then arrange transport, activities and costs for you. You'll always have contact with us, your facilitators or your dentist, so you never worry."
    />
  </div></div>

</div>

       

        {/* <Image src='/images/down-arrow.png' className='DownArrow' width={50} height={50} alt='downarrow'/> */}
 

    <Spages/>
    <br/><br/><br/>
    <Faq/>
        </div>

    
        
  );
}