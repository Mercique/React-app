import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { apiUrl } from "../../utils/constants";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const result = await response.json();
      setArticles(result);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <button onClick={getData}>Refresh</button>
      <h3>Articles</h3>
      {error && <h5>Error</h5>}
      {isLoading ? (
        <CircularProgress />
      ) : (
        <ul>
          {articles.map((art) => (
            <li key={art.id}>{art.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};
