import { useState, useEffect } from "react";
import Character from "../Character/Character";
import Pagination from "../Pagination/Pagination";
import "./CharacterList.css";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="characterList">
      <Pagination page={page} prevPage={prevPage} nextPage={nextPage} />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="list">
          {characters.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </div>
      )}
      <Pagination page={page} prevPage={prevPage} nextPage={nextPage} />
    </div>
  );
}

export default CharacterList;
