import { useState, useEffect } from "react";

export const useJsonFetch = (url: string, opts: any) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url, opts);

        if (!response.ok) {
          setError(response.statusText);
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };
    setTimeout(fetchData, 2000); // Имитация  задержки при запросе (локально ее нет)
  }, [url]);

  return [data, loading, error];
};
