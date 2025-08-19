import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css'
import Header from './Header/Header';
function Home(props) {
    return (
        <div id="Home" className='home-container'>
            <Header />
            <Profile />
            <Footer />
        </div>
    );
}

export default Home;