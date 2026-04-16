import { useParams, Link } from "react-router-dom";
import useCats from "../data/useCats";

export default function BreedDetail() {
  const { id } = useParams();
  const cats = useCats();

  const breed = cats.find((b) => b.id === id);

  if (!breed) return <p>Loading...</p>;

  return (
    <div className="detail-page">
      <Link to="/">← Back to Dashboard</Link>

      <h1>{breed.name}</h1>

      <img
        src={breed.image?.url}
        alt={breed.name}
        className="detail-img"
      />

      <p><strong>Origin:</strong> {breed.origin}</p>
      <p><strong>Life Span:</strong> {breed.life_span} years</p>
      <p><strong>Weight:</strong> {breed.weight.metric} kg</p>
      <p><strong>Temperament:</strong> {breed.temperament}</p>
      <p><strong>Description:</strong> {breed.description}</p>

      <h3>Breed Traits</h3>
      <ul>
        <li>Affection: {breed.affection_level}/5</li>
        <li>Energy: {breed.energy_level}/5</li>
        <li>Intelligence: {breed.intelligence}/5</li>
        <li>Grooming: {breed.grooming}/5</li>
      </ul>
    </div>
  );
}