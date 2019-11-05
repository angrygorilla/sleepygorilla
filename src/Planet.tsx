import React, { useState, useEffect } from "react";

const Planet: React.FC = () => {
  const [ planets, setPlants ] = useState({});
  const [ hasError, setError ] = useState(false);

  const fetchData = async () => {
    const res = await fetch('https://swapi.co/api/planets/4');
    res.json()
    .then(res => setPlants(res))
    .catch(error => setError(true));
  }

  useEffect( () => {
    fetchData();
  });

  return (
  <div> hello</div>
  )
}

export default Planet;