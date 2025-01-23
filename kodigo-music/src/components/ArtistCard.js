import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Artists() {
  const artists = [
    { id: 1, name: "Artist 1", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Artist 2", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Artist 3", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Artist 4", image: "https://via.placeholder.com/150" },
  ];

  return (
    <section id="artists" className="container my-5">
      <h2 className="text-center mb-4">Featured Artists</h2>
      <div className="row">
        {artists.map((artist) => (
          <div className="col-md-3" key={artist.id}>
            <div className="card text-center">
              <img
                src={artist.image}
                className="card-img-top rounded-circle mx-auto mt-3"
                alt={artist.name}
              />
              <div className="card-body">
                <h5 className="card-title">{artist.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Artists;
