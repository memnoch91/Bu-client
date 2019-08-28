import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'

//Components
import Hero from '../components/structural/Hero';
import Card from '../components/structural/Card';

 class Home extends Component {

    render() {
        return (
            <Fragment>
                <Hero />
                <div className='columns is-multiline is-marginless p-2xlg'>
                    <div className='column is-4'>
                        <Card />
                    </div>
                    <div className='column is-4'>
                        <Card />
                    </div>
                    <div className='column is-4'>
                        <Card />
                    </div>
                    <div className='column is-4'>
                        <Card />
                    </div>
                    <div className='column is-4'>
                        <Card />
                    </div>
                    <div className='column is-4'>
                        <Card />
                    </div>
                    <div className='column is-4'>
                        <Card />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home;
