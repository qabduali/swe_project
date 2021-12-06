import React from 'react'
import HotelCard from './HotelCard'
import '../../../css/MainContent.css'

const MainContent = () => {
   
    return (
        <div style={{marginTop:'10px'}} className='ui container'>
            <div class="ui grid">
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