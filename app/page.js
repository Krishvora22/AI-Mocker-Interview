import Header from "./dashboard/_components/Header";
import HeroSection from "./dashboard/_components/HeroSection";
import FeatureSecation from "./page/FeatureSection";
import Analytics from "./page/Analytics";
import TestimonialsSection from "./page/TestimonialsSection";
import Upgrade from "./dashboard/upgrade/page";
import Footer from "./page/Footer";


export default function Home() {
  return (
    
    <div>
      {/* <Image src={'/grid.svg'} className="absolute z-[-10] w-full" 
      width={1200} height={300} /> */}
      <Header/>
      <HeroSection/>
      <FeatureSecation/>
      <Analytics/>
      <TestimonialsSection/>
      <Upgrade/>      
      <Footer />
  </div>
 

  );
}
