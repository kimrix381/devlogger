import { useState } from "react";

const AddMovie = ({ onAdd }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: name === "rating" ? Number(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMovie.title || !newMovie.posterURL)
      return alert("Title and Poster URL are required");
    onAdd(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-4 mb-6 justify-center"
    >
      <input
        name="title"
        placeholder="Title"
        value={newMovie.title}
        onChange={handleChange}
        className="px-4 py-2 rounded border shadow w-52"
      />
      <input
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleChange}
        className="px-4 py-2 rounded border shadow w-64"
      />
      <input
        name="posterURL"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={handleChange}
        className="px-4 py-2 rounded border shadow w-64"
      />
      <input
        name="rating"
        type="number"
        min="0"
        max="10"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={handleChange}
        className="px-4 py-2 rounded border shadow w-28"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
      >
        Add
      </button>
    </form>
  );
};

export default AddMovie;
