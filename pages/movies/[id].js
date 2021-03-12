import { useRouter } from "next/dist/client/router";
import { getMovieById } from "../../actions";

const Movie = ({ movie }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.genre}</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
      <p className="description-text">{movie.longDescription}</p>
      <style jsx>{`
        .description-text {
          font-size: 21px;
        }
      `}</style>
    </div>
  );
};

Movie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id);
  return { movie };
};

export default Movie;
