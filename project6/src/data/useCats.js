import { useEffect, useState } from "react";

export default function useCats() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    async function fetchCats() {
      const res = await fetch("https://api.thecatapi.com/v1/breeds");
      const data = await res.json();
      setCats(data);
    }
    fetchCats();
  }, []);

  return cats;
}