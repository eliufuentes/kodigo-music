import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Explore() {
  const albums = [
    {
      id: 1,
      title: "Hotel California",
      artist: "Eagles",
      image: "https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg",
      description: "Una banda icónica con una de las canciones más famosas del rock, 'Hotel California'.",
      youtubeLink: "https://www.youtube.com/watch?v=09839DpTctU",
    },
    {
      id: 2,
      title: "Thriller",
      artist: "Michael Jackson",
      image: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",
      description: "El Rey del Pop, revolucionó la música y la danza con sus movimientos icónicos.",
      youtubeLink: "https://www.youtube.com/watch?v=4V90AmXnguw",
    },
    {
      id: 3,
      title: "Romances",
      artist: "Luis Miguel",
      image: "https://i.imgur.com/Td8GbU2.jpeg",
      description: "El Sol de México, conocido por su voz inigualable y sus canciones románticas.",
      youtubeLink: "https://www.youtube.com/watch?v=T8y6nAx06xE",
    },
    {
      id: 4,
      title: "Héroe",
      artist: "Enrique Iglesias",
      image: "https://i.imgur.com/203MLQW.jpeg",
      description: "Un cantautor español conocido por sus baladas y canciones llenas de sentimiento.",
      youtubeLink: "https://www.youtube.com/watch?v=a-Bd5PjpeDc",
    },
    {
      id: 5,
      title: "Carmen",
      artist: "Plácido Domingo",
      image: "https://i.imgur.com/5kw1bWU.jpeg",
      description: "Un tenor español con una carrera internacional en ópera y música clásica.",
      youtubeLink: "https://www.youtube.com/watch?v=vHnl29pnSuc",
    },
    {
      id: 6,
      title: "Deja Que Salga la Luna",
      artist: "Pedro Infante",
      image: "https://i.imgur.com/K6cRcAg.jpeg",
      description: "Una leyenda del cine y la música mexicana con canciones llenas de emoción.",
      youtubeLink: "https://www.youtube.com/watch?v=oF4UKI4GqY8",
    },
  ];

  const [selectedArtist, setSelectedArtist] = useState(null);

  const handleShowModal = (artist) => {
    setSelectedArtist(artist);
  };

  const handleCloseModal = () => {
    setSelectedArtist(null);
  };

  return (
    <section id="explore" className="container my-5">
      <h2 className="text-center mb-4 text-primary">Descubre Nueva Música</h2>
      <div className="row">
        {albums.map((album) => (
          <div className="col-md-4 mb-4" key={album.id}>
            <div className="card shadow h-100">
              <div className="ratio ratio-4x3">
                <img
                  src={album.image}
                  className="card-img-top"
                  alt={album.title}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{album.title}</h5>
                <p className="card-text">{album.artist}</p>
                <button
                  className="btn btn-info mb-2"
                  onClick={() => handleShowModal(album)}
                >
                  Ver Descripción
                </button>
                <button
                  className="btn btn-success"
                  onClick={() =>
                    window.open(album.youtubeLink, "_blank", "noopener noreferrer")
                  }
                >
                  <i className="bi bi-play-circle"></i> Reproducir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedArtist && (
        <Modal show={!!selectedArtist} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedArtist.artist}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedArtist.image}
              alt={selectedArtist.title}
              className="img-fluid rounded mb-3"
            />
            <p>{selectedArtist.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
}

export default Explore;
