import { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/bobs';

export default function useCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCharacters();
        setCharacters(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    loadData();
  }, []);

  return [characters];
}