import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "./Banner";

interface Movie {
  backdrop_path: string;
  title: string;
  overview: string;
}

const BannerComponent: React.FC = () => {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmFjNzE0ZmUwYzg0M2QwZjNjNTU3NTY2M2VlYjMyYiIsIm5iZiI6MTczNTg2NDQ1My4xMzUsInN1YiI6IjY3NzczMDg1YWI1ZWM0YzNkYzcyNDVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J6T_fcCqAbmFxVtJGiSMgEFCGnNbf2vBQpfVfYCRZj4";
  const url = "https://api.themoviedb.org/3/movie/939243";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
  
        console.log("Response data:", response.data);
        const movieData = response.data; 
        setMovie({
            title: movieData.title,
            overview: movieData.overview,
            backdrop_path: movieData.backdrop_path,
          });
      } catch (error) {
        console.error("Error fetching data:", error || error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [url, token]);
  
  if (loading) {
    return <div className="text-center text-blue-500">Cargando...</div>;

  }
  if (!movie) {
    return <div className="text-center text-blue-500">no se encontro la movie...</div>;
  }

  return (
    <div className="DonBanner">
      {
        <Banner 
          title={movie.title}
          description={movie.overview}
          image={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}

        />
      }
    </div>
  );
};

export default BannerComponent;
