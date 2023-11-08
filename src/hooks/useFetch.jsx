import React from 'react';
import { useEffect, useState } from 'react';

function useFetch (apiUrl) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`/1/search.php?s=Arrabiata`,{
              method: "GET", 
              mode: 'cors',
              headers: {
                  'accept': 'application/json',
              }
            });
            
            if (!response.ok) throw { status: res.status, statusText: res.statusText }

            const jsonData = await response.json();
            setData(jsonData);
            console.log(jsonData);
            setIsLoading(false);
          } catch (error) {
            setError(error);
            setIsLoading(false);
          }
        };
    
        fetchData();
      }, [apiUrl]);
    
      return { data, isLoading, error };
};

export default useFetch;