import { useEffect, useState } from "react";
import Movie from "./components/Movie";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
  
    const getMovie = async () => {
      const res = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      );
      const json = await res.json();
      setMovies(json.data.movies);
      console.log(json.data.movies);
      setLoading(false);
    };
  
    useEffect(() => {
      getMovie();
    }, []);
    return (
      <div>
        {loading ? (
          <h3>Loading....</h3>
        ) : (
          movies.map((movie) => (
            <Movie
              key={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
            />
          ))
        )}
      </div>
    );
}

export default Home