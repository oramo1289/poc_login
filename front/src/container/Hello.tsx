import React, { memo } from 'react'

import './Hello.css'

const Hello = (): JSX.Element => {
    return (
        <div className={'hello-container'}>
            <section className={'hello-container__giff'}>
                <div className="hello-container__giff__frame">
                    <iframe
                        allowFullScreen={true}
                        frameBorder="0"
                        height="100%"
                        src="https://giphy.com/embed/BKq0FieYJEwZ50s2jW/video"
                        className="iframe"
                        width="100%"
                    ></iframe>
                </div>
            </section>
            <div className={'hello-container__title'}>{'¡Bienvenidos!'}</div>
        </div>
    )
}

export default memo(Hello)
