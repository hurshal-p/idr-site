
import Hero from "@/app/Components/Hero/Hero";
import Image from "next/image";
import Paragraph from "@/app/Components/Paragraph/Paragraph";
import grid from "@/app/Components/Grid/Grid";
import Grid from "@/app/Components/Grid/Grid";
import './page.css'
import Title from "@/app/Components/Title/Title";


export default function treatmentsandclinics() {

  return (
   <div className="py-20">
  <Hero src="/images/treatmentandclinicshero.jpg" />
  <div className="relative z-50 text-white text-center translate-y-[-32rem]">
    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-shadow-[2px_2px_4px_#186466]">
      Treatments and Clinics
    </h2>
    
  </div>

  <div className="relative z-50 w-full flex justify-center translate-y-[-28rem]">
    <div className="text-white text-3xl text-center font-medium text-shadow-[2px_2px_4px_#186466] max-w-[920px] px-4">
      <Paragraph
        className="text-5xl text-white"
    
        content="Once you know the city you want to visit, we can help you choose the right clinic and treatments for you. Our professionals are able to accomodate a range of needs"/>
    </div>
  </div>
<div className="tctitle"><Title title="Choose your favourite city" subtitle={<a href="#treatments" className=" cursor-pointer transition-transform duration-300 hover:scale-105">Skip to Treatments</a>} className='relative'/></div>

 <div className="grid-wrapper">
  <div className="row row-3">
    <Grid image='/gridimages/delhigrid.png' text={<p><b>Delhi</b><br/>A city where ancient Mughal grandeur meets modern chaos — explore majestic forts, bustling bazaars, and street food that defines India's soul. Get lost in Chandni Chowk, or the Red Fort.</p>} />  
    <Grid image='/gridimages/mumbaigrid.png'text={<p><b>Mumbai</b><br/>Dive into Bollywood, colonial architecture, seaside promenades and the electric street food scene in one of India's most fast-moving cities.</p>}/>
    <Grid image='/gridimages/bangaloregrid.png'text={<p><b>Bangalore</b><br/>India's tech capital with thriving cafe culture, lush greenery and traditional architecture.</p>}/>
  </div>
  <div className="row row-2">
    <Grid image='/gridimages/kochigrid.png'text={<p><b>Kochi</b><br/>A coastal gem withh Portuguese charm - wander through busy streets, spice markets, and backwaters, enjoying tasty South Indian cuisine.</p>}/>
    <Grid image='/gridimages/dubaigrid.png'text={<p><b>Dubai</b><br/>A futuristic desert metropolis — experience luxury skyscrapers, golden souks, cultural richness, and thrilling desert adventures.</p>}/>
  </div>



</div>

<div className="tctitle2"><Title title="Choose your favourite city" subtitle={<a href="#done" className=" cursor-pointer transition-transform duration-300 hover:scale-105">What next?</a>} className='relative'/></div>

<div className="grid2-wrapper" id="treatments">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-25 mt-10 justify-center mx-auto">
  <Grid
    image="/gridimages/general.png"
    text={
      <p>
        <b>General Treatments</b><br/>
        - Fillings and Restorations<br/>
        - Crowns and Bridges<br/>
        - Root Canal Therapy
      </p>
    }
  />
  <Grid
    image="/gridimages/cosmetic.png"
    text={
      <p>
       <b>Cosmetic Treatments</b><br/>
        - Teeth whitening<br/>
        - Veneers<br/>
        - Smile makeovers<br/>
        - Composite bonding
      </p>
    }
  />
  <Grid
    image="/gridimages/endodontic.png"
    text={
      <p>
        <b>Endodontic Treatments</b><br/>
        - Root Canal Therapy<br/>
        - Apicoectomy<br/>
        - Pulpotomy/Vital pulp therapy<br/>
        - Regenerative Endodontics/Injury treatment
      </p>
    }
  />
  <Grid
    image="/gridimages/oralsurgery.png"
    text={
      <p>
        <b>Oral Surgery</b><br/>
        - Corrective jaw surgery<br/>
        - Bone grafting<br/>
        - Implants
      </p>
    }
  />
  <Grid
    image="/gridimages/orthodontics.png"
    text={
      <p>
       <b>Orthodontic Treatments</b><br/>
        - Invisalign<br/>
        - Traditional Braces<br/>
        - Retainers<br/>
        - Other types of braces, retainers or mouthguards
      </p>
    }
  />
  <Grid
    image="/gridimages/pediatric.png"
    text={
      <p>
        <b>Pediatric Treatments</b><br/>
        - Examinations and cleaning<br/>
        - Fluoride treatments and dental sealants<br/>
        - Early assessments
      </p>
    }
  />
  <Grid
    image="/gridimages/periodontics.png"
    text={
      <p>
        <b>Periodontic Treatments</b><br/>
        - Scaling and root planning<br/>
        - Gum grafts<br/>
        - Dental implants
      </p>
    }
  />
  <Grid
    image="/gridimages/prosthodontics.png"
    text={
      <p>
        <b>Prosthodontics</b><br/>
        - Dentures and Enhancements<br/>
        - Inlays and outlays<br/>
        - Rehabilitation
      </p>
    }
  />
</div>
</div>

<div className="overlay-container" id="done">
  <div className="content-box">
    <Title title="Got your city and Clinic?"/>
    <br/>
    <br/>
    <h1>
      Perfect. On the <a href="/contactus" className="link">contact page</a>, send us a message detailing your city of choice, treatment and other preferences. We'll be in touch soon and set up a meeting. You're just a few steps away from achieving the perfect smile!
    </h1>
  </div>
</div>

</div>



       
    
        
  );
}