// Funcionalidad extra: Calificar artistas
import React, { useState } from 'react';

function ArtistCard({ artistName }) {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="card text-center my-3">
      <div className="card-body">
        <h5 className="card-title">{artistName}</h5>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <i
              key={star}
              className={`bi bi-star${star <= rating ? '-fill' : ''}`}
              style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
              onClick={() => handleRating(star)}
            ></i>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
