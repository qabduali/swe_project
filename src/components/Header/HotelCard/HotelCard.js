import React from "react";


const HotelCard = (props) => {
    const styles = {
        marginLeft: '20px',
        marginTop: '10px',
        marginRight: '10px',
    }

    
    return (
        <div className='four wide column'>
            <div className="ui link blue fluid card">
                <div class="content">
                    <div class="header">{props.hotelName}</div>
                    <div class="meta">
                        <span class="category">Animals</span>
                    </div>
                    <div class="description">
                        <p></p>
                    </div>
                </div>
                <div class="extra content">
                    <div class="right floated author">
                        ff
                    </div>
                </div>
            </div>
        </div>
    )
}



export default HotelCard