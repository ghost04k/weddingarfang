import React from 'react'
import LocationMap from '../Modal'
import SectionTitle from '../SectionTitle'
import sImg1 from '/public/images/event/4.jpg'
import sImg2 from '/public/images/event/5.jpg'
import sImg3 from '/public/images/event/6.jpg'
import Image from 'next/image'


const Events = [
  

]

const EventSectionS2 = (props) => {
    return (
        <section className={`wpo-event-section-s2 section-padding ${props.eClass}`} id="event">
            <div className="container">
                <SectionTitle subTitle={'Our Wedding 🥰'}/>
                
            </div>
        </section>
    )
}

export default EventSectionS2;