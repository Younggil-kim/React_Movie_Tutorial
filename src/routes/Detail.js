import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(id);

  return (
    <div>
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <>
          <h3>{movie.title}</h3>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <p>{movie.description_full}</p>
        </>
      )}
    </div>
  );
}

export default Detail;
