import React from 'react';
import StarRating from './Rating';

const RestaurantItem = ({ restaurant }) => {
    return (
        <div className="restaurant-item">
            <img src={restaurant.photos[0]} alt={restaurant.name} className="restaurant-image" />
            <h3 className="font-restaurant">{restaurant.name}</h3>
            <StarRating rating={restaurant.rating}/>
            <div className='info'>
                <p className="font-restaurant info-open">{restaurant.categories[0]} - {restaurant.price_range}</p>
                    <p className={`font-restaurant ${restaurant.isOpen ? 'open-now' : 'closed'}`}>
                        {restaurant.isOpen ? 'OPEN NOW' : 'CLOSED'}
                    </p>
            </div>
            <button onClick={() => window.location.href = `/detail/${restaurant.id}`} className="learn-more">Learn More</button>
        </div>
    );
};

export default RestaurantItem;
