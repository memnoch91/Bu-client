import React from 'react';


import heroStyles from '../../styles/Hero.module.scss';

function Hero() {
  
    return (
        <section className='hero is-large' style={{marginBottom: '1rem'}}>
            <div className={`hero-body ${heroStyles.bkc}`} >
                <div className='container'>
                    <h1 className='title'>
                        bunatati-uscate
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Hero;
