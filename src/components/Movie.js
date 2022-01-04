import PropTypes from "prop-types"

function Movie({ medium_cover_image, title, summary }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes ={
    medium_cover_image: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired
}

export default Movie;
