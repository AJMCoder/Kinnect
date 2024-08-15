import React, { useState } from 'react';

const Ratings = ({ count = 5, size = 24, color = "gold", averageRating = 0 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {[...Array(count)].map((_, index) => {
                const ratingValue = index + 1;

                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            style={{ display: 'none' }}
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <svg
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                            onClick={() => setRating(ratingValue)}
                            height={size}
                            width={size}
                            viewBox="0 0 24 24"
                            fill={(ratingValue <= (hover || rating)) ? color : "gray"}
                            style={{ cursor: 'pointer' }}
                        >
                            <path d="M12 .587l3.668 7.431L24 9.58l-6 5.848 1.418 8.266L12 18.896l-7.418 4.798L6 15.428 0 9.58l8.332-1.562z" />
                        </svg>
                    </label>
                );
            })}
            <span style={{ marginLeft: '8px', fontSize: '1.2rem' }}>
                {averageRating.toFixed(1)} / {count}
            </span>
        </div>
    );
};

export default Ratings;
