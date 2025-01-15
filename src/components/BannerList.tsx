import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "./Banner";

interface DataItem {
  id: number;
  results: [];
  adult: boolean;
  poster_path: string;
  title: string;
  overview: string;
}

const banner: React.FC = () => {
  const [items, setItems] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const token ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmFjNzE0ZmUwYzg0M2QwZjNjNTU3NTY2M2VlYjMyYiIsIm5iZiI6MTczNTg2NDQ1My4xMzUsInN1YiI6IjY3NzczMDg1YWI1ZWM0YzNkYzcyNDVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J6T_fcCqAbmFxVtJGiSMgEFCGnNbf2vBQpfVfYCRZj4";
  const url = 'https://api.themoviedb.org/3/find/642195?external_source=imdb_id&language=en';
  const options = {
  method: 'GET',
  headers: {
  accept: 'application/json',
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const changes = response.data.results || [];
        setItems(changes);
        console.log(changes);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-blue-500">Cargando...</div>;
  }

  return (
    <div>
      {items.map(item => (
        <Banner
          key={item.id}
          title={item.title}
          description={item.overview}
          image={item.poster_path}
        />
      ))}
    </div>
  );
};

export default banner;