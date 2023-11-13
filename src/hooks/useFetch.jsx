import React from "react";
import { useEffect, useState } from "react";

function useFetch(apiUrl) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok)
          throw Error("Could not fetch the data for that resource") ;

        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [apiUrl]);

  return { data, isLoading, error };
}

export default useFetch;
