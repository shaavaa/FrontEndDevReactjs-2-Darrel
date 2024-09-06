import React, { useState } from 'react';

const StarRating = ({ rating }) => {
    const totalStar = Array.from({length: 5}, (_, i) => i < Math.floor (rating) ? '★' : '☆').join(' ');

    const halfStar = rating % 1 !==0;
    const starelement = totalStar.split(' ').map((totalStar, i) =>
        <span key={i}>{totalStar}</span>
    )
    return (
        <div className='star-rating'>
           {starelement}
           {halfStar}
        </div>
    )
}

export default StarRating;