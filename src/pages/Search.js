import React from 'react'
import MainContent from '../components/Header/HotelCard/MainContent'


const Search = () => {
    const styles = {
        marginTop: '10px',
        width: '100%',
    }

    return (
        <div className='ui container'>
            <div class="ui icon input" style={styles}>
                <i class="search icon"></i>
                    <input type="text" placeholder="Search..."/>
            </div>
            <MainContent></MainContent>
        </div>
    )
}

export default Search