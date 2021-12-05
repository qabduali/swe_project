import React from 'react'
import HotelCard from './HotelCard'


const MainContent = () => {
    return (
        <div style={{marginTop:'10px'}} className='ui container'>
            <div class="ui six column grid">
                <HotelCard hotelName = "TOkio"></HotelCard>
                <HotelCard hotelName = "TOkio"></HotelCard>
                <HotelCard hotelName = "TOkio"></HotelCard>
                <HotelCard hotelName = "TOkio"></HotelCard>
                <HotelCard hotelName = "TOkio"></HotelCard>
                <HotelCard hotelName = "TOkio"></HotelCard>
                <HotelCard hotelName = "TOkio"></HotelCard>
            </div>
        </div>
    )
}

export default MainContent