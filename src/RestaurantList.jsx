import React, { useState } from 'react';
import RestaurantItem from './RestaurantItem';

const RestaurantList = ({ restaurants, setSelectedRestaurant }) => {
    const [filters, setFilters] = useState({
        openNow: false,
        price: '',
        category: ''
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    const handleClear = (e) => {
        setFilters({
            openNow: false,
            price: '',
            category: ''
        })
    }

    const filteredRestaurants = restaurants.filter(restaurant => {
        return (
            (!filters.openNow || restaurant.isOpen) &&
            (!filters.price || restaurant.price_range === filters.price) &&
            (!filters.category || restaurant.categories.includes(filters.category))
        );
    });

    return (
        <div className="restaurant-list">
            <div className="filters">
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <h4>Filter By:</h4>
                    <label>
                        <input
                            type="checkbox"
                            name="openNow"
                            checked={filters.openNow}
                            onChange={() => setFilters({ ...filters, openNow: !filters.openNow })}
                        />
                        Open Now
                    </label>
                    <select name="price" value={filters.price} onChange={handleFilterChange}>
                        <option value="">Price</option>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                        <option value="$$$$">$$$$</option>
                    </select>
                    <select name="category" value={filters.category} onChange={handleFilterChange}>
                        <option value="">Categories</option>
                        <option value="Thai">Thai</option>
                        <option value="Seafood">Seafood</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Italian">Italian</option>
                        <option value="American">American</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Steakhouse">Steakhouse</option>
                    </select>
                </div>

                {/* <div className='clear'> */}
                <button className="clear" onClick={handleClear}>
                    Clear All
                </button>
                {/* </div> */}
            </div>
            <div className="horizontal-line"></div>
            <div className="restaurant-grid">
                {filteredRestaurants.map(restaurant => (
                    <RestaurantItem key={restaurant.id} restaurant={restaurant} />
                ))}
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <button className="load">Load More</button>
            </div>
        </div>
    );
};

export default RestaurantList;

