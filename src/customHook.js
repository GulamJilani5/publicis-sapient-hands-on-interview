import { useEffect, useState } from "react";

const useFetchData = (url) => {
  
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDate = async () => {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log("data", data);
      setValue(data.products);
      setLoading(false);
    };
    fetchDate();
  }, []);

  if (loading) {
    // Throw a Promise to let Suspense handle it
    throw new Promise(() => {});
  }

  return { value };
};

export default useFetchData;
