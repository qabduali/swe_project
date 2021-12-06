import React from 'react'
import HotelCard from './HotelCard'
import '../../../css/MainContent.css'

const MainContent = (props) => {
    const onClick = (cache => i => {
        if( !cache[i] ) cache[i] = e => {
            console.log(i)
            //routing
        }
        return cache[i];
    }
    )({});

    return (
        <div style={{marginTop:'10px'}} className='ui container'>
            <div className="ui grid">
                {props.hotelData.map(({hotel_id, hotel_name, hotel_address})=>(
                    
                    <HotelCard key={hotel_id} hotelName = {hotel_name} hotelAddress={hotel_address} onClick={()=>onClick(hotel_id)}></HotelCard>
                ))}
            </div>
        </div>
    )
}

export default MainContent