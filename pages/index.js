import React, {Fragment} from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/hero'
import PartnerSection from '../components/PartnerSection/PartnerSection';
import CoupleSection from '../components/CoupleSection/CoupleSection';
import VideoSection from '../components/VideoSection';
import StorySection from '../components/StorySection/StorySection';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import BrideGrooms from '../components/BrideGrooms/BrideGrooms';
import RSVP from '../components/RSVP';
import EventSection from '../components/EventSection/EventSection';
import CtaSection from '../components/CtaSection/CtaSection';
import BlogSection from '../components/BlogSection/BlogSection';
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar'


const HomePage =() => {

//     const [isOpen, setIsOpen] = useState(false);

    return(
        <Fragment>
            <Navbar hclass={'wpo-site-header-s1'}/>
            <Hero/>
            <PartnerSection/>
            <CoupleSection cClass={'pt-0'}/>
          
            <StorySection/>
           
            <Footer/> 
            <Scrollbar/>
        </Fragment>
    )
};

export default HomePage;