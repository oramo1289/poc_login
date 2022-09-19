import React, { memo } from 'react'

import './Home.css'

const Home = (): JSX.Element => {
    return (
        <div className={'home-container'}>
            <section className={'home-container__giff'}>
                <div className="home-container__giff__frame">
                    <iframe
                        src="https://giphy.com/embed/QAsBwSjx9zVKoGp9nr"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        className="giphy-embed iframe"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
            <div className={'home-container__title'}>{'¡GRACIAS TOTALES!'}</div>
        </div>
    )
}

export default memo(Home)
