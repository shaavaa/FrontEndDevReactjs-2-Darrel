import React from 'react';
import StarRating from './Rating';
import { height, width } from '@fortawesome/free-solid-svg-icons/fa0';

const RestaurantDetail = ({ restaurant }) => {
    console.log(restaurant)
    return (
        <div className="restaurant-detail">
            <div className='info'>
                <h1 className="font-restaurant info-open">{restaurant.name}</h1>
                <h5 className='font-restaurant'>
                    <StarRating rating={restaurant.rating} />
                </h5>
            </div>
            <img src={restaurant.photos[0]} alt={restaurant.name} className="restaurant-image image" />
            <div style={styles.mapContainer}>
                {restaurant.maps}
            </div>
            <p className='font-text'>
                {restaurant.text}
            </p>
        </div>
    );
};

const styles = {
    mapContainer: {
        margin: '20px 0',
    },
    mapImage: {
        width: '100%',
        height: 'auto',
    },
};

export default RestaurantDetail;
