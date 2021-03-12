import Link from "next/link";

const MovieList = ({ movies }) => {
  const shorten = (text = "", maxLen = 100) => {
    return text.length > maxLen ? `${text.substr(0, maxLen)}...` : text;
  };

  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <Link href={`/movies/${movie.id}`}>
              <a href="#">
                <img className="card-img-top" src={movie.image} alt="" />
              </a>
            </Link>
            <div className="card-body">
              <h4 className="card-title">
                <Link href={`/movies/${movie.id}`}>
                  <a href="#">{movie.name}</a>
                </Link>
              </h4>
              <h5>$24.99</h5>
              <p className="card-text">{shorten(movie.description)}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{movie.rating}</small>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
