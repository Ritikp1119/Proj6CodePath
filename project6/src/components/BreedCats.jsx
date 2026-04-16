import { Link } from "react-router-dom";

export default function BreedCats({ breed }) {
  return (
    <Link to={`/breed/${breed.id}`} className="breed-card">
      <img
        src={breed.image?.url}
        alt={breed.name}
        className="breed-img"
      />
      <h3>{breed.name}</h3>
      <p><strong>Origin:</strong> {breed.origin}</p>
      <p><strong>Life Span:</strong> {breed.life_span} years</p>
      <p><strong>Weight:</strong> {breed.weight.metric} kg</p>
    </Link>
  );
}
