import React from 'react'
import LocationMap from '../Modal'
import SectionTitle from '../SectionTitle'
import sImg1 from '/public/images/event/1.jpg'
import sImg2 from '/public/images/event/2.jpg'
import sImg3 from '/public/images/event/3.jpg'
import Image from 'next/image'


const Events = [
    {
        title: 'The Reception',
        li1: 'Monday, 25 Sep, 2024 1:00 PM – 4:30 PM',
        li2: 'Estern Star Plaza, Road 123, USA',
        sImg: sImg1,
    },
    {
        title: 'The Ceremony',
        li1: 'Monday, 25 Sep, 2024 1:00 PM – 4:30 PM',
        li2: 'Estern Star Plaza, Road 123, USA',
        sImg: sImg2,
    },
    {
        title: 'Wedding Party',
        li1: 'Monday, 25 Sep, 2024 1:00 PM – 4:30 PM',
        li2: 'Estern Star Plaza, Road 123, USA',
        sImg: sImg3,
    },

]

const EventSection = (props) => {
    return (
        <section className={`wpo-event-section section-padding ${props.eClass}`} id="event">
            <div className="container">
                <SectionTitle subTitle={'Our Wedding 🥰'}/>
                
            </div>
        </section>
    )
}

export default EventSection;