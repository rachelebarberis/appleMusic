import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
const SectionNuoveUscite = () => {
  const [songs, setSongs] = useState([]);

  const getSong = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=pinguinitatticinucleari"
      );
      if (response.ok) {
        const data = await response.json();
        setSongs(data.data.slice(0, 12));
      } else {
        console.log("Nessun risultato trovato.");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  useEffect(() => {
    getSong();
  }, []);

  return (
    <Container className="mt-3">
      <p className="text-white fw-bold">
        Nuove Uscite <i className="bi bi-chevron-right"></i>
      </p>
      <Row>
        {songs.map((song) => (
          <Col key={song.id} xs={4} md={2}>
            <div className="mb-2">
              <img
                src={song.album.cover_medium}
                alt={song.title}
                className="img-fluid rounded-2"
              />
              <p className="text-white">
                {song.title}
                <br></br>
                <span className="text-secondary">{song.artist.name}</span>
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SectionNuoveUscite;
