import React from 'react'

function Card() {
    return (
        <div className='card'>
            <div className='card-image'>
                <figure className='image is-4by3'>
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="test"></img>
                </figure>
            </div>
            <div className='card-content'>
                <p className='title is-4'>Amania Muscaria</p>
                <div className='content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                </div>
            </div>
        </div>
    )
}

export default Card;
