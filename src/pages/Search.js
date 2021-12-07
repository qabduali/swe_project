import React from 'react'
import MainContent from '../components/Header/HotelCard/MainContent'


const Search = () => {

    const hotelData = [
    {'hotel_id':1,'hotel_name':'FirstHotelName','hotel_address':'FirstHotelAddress'},
    {'hotel_id':2,'hotel_name':'SecondHotelName','hotel_address':'SecondHotelAddress'},
    {'hotel_id':3,'hotel_name':'ThirdHotelName','hotel_address':'ThirdHotelAddress'},
    {'hotel_id':4,'hotel_name':'FourthHotelName','hotel_address':'FourthHotelAddress'},
    {'hotel_id':5,'hotel_name':'FifthHotelName','hotel_address':'FifthHotelAddress'}];




    const styles = {
        marginTop: '10px',
        width: '100%',
    }

    return (
        <div className='ui container'>
            <h1 style={{fontSize: '48px'}}>Hotels</h1>
            <div className="ui icon input" style={styles}>
                <i className="search icon"></i>
                    <input type="text" placeholder="Search..."/>
            </div>
            <MainContent hotelData={hotelData}></MainContent>
        </div>
    )
}

export default Search