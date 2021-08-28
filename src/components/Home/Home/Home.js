import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Contact2 from '../Contact2/Contact2';
import Counter from '../Counter/Counter';
import Header from '../Header/Header';
import Offer from '../Offer/Offer';
import Pricing from '../Pricing/Pricing';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <Offer/>
            <About/>
            <Counter/>
            <Contact2/>
            {/* <Contact/> */}
           <Review/>
           <Pricing/>
           <Footer/>
        </div>
    );
};

export default Home;