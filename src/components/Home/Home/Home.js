import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Counter from '../Counter/Counter';
import Header from '../Header/Header';
import Offer from '../Offer/Offer';
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
            <Contact/>
           <Review/>
           <Footer/>
        </div>
    );
};

export default Home;