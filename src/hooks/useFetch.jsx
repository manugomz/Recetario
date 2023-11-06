import React from 'react';
import { useEffect, useState } from 'react';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
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

// const fetchApi = async(url) => {
//     try {
//         let res =await fetch(url);
//         let json = await res.json();
//         if (!res.ok) throw { status: res.status, statusText: res.statusText };
//         return json;
//     } catch (error) {
//         const errorMsg = document.createElement('p');
//         errorMsg.textContent = `error: ${error.message}`;
//     }  
// }