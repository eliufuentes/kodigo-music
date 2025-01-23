import React from 'react';
import ArtistCard from '../components/ArtistCard';

function Explore() {
  const artists = ['Taylor Swift', 'Bad Bunny', 'Dua Lipa'];

  return (
    <div className="container my-5">
      <h2>Explore Artists</h2>
      <div className="row">
        {artists.map((artist) => (
          <div className="col-md-4" key={artist}>
            <ArtistCard artistName={artist} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
