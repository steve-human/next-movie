import { useRouter } from "next/router";
import { createMovie } from "../actions";
import Modal from "./modal";
import MovieCreateForm from "./movie-create-form";

const SideMenu = ({ appName, categories }) => {
  const router = useRouter();
  let modalRef = null;
  const handleCreateMovie = async (movie) => {
    await createMovie(movie);
    modalRef.closeModal();
    router.push("/");
  };

  return (
    <>
      <Modal ref={(elem) => (modalRef = elem)} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">{appName}</h1>
      <div className="list-group">
        {categories.map((category) => (
          <a key={category.id} href="#" className="list-group-item">
            {category.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default SideMenu;
