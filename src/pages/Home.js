import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import {Link} from "react-router-dom"
export default function Home(){
    return (
    <Hero>
        <Banner title="Luxurious rooms" subtitle="deluxe rooms stating from at $299">
            <Link to='/room' className="btn-primary">
                Our Rooms
            </Link>
        </Banner>
    </Hero>
    )
}
