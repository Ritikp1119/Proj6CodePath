import useCats from "../data/useCats";
import BreedCats from "../components/BreedCats";
import LifeSpanChart from "../charts/LifeSpanChart";
import WeightChart from "../charts/WeightChart";

export default function Dashboard() {
  const cats = useCats();

  return (
    <div className="dashboard">
      <h1>Cat Breeds Dashboard</h1>

      <div className="charts">
        <LifeSpanChart cats={cats} />
        <WeightChart cats={cats} />
      </div>

      <div className="breed-list">
        {cats.map((breed) => (
          <BreedCats key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
}