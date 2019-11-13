import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [data, setData] = useState([]);
  const isLoggedIn = useSelector(state => state.logged);

  useEffect(() => {
    const fetchJson = async () => {
      if (isLoggedIn) {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=1967171a7fb0f71db60ca6c465e05f1d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        );
        let parsedData = await response.json();

        setData(parsedData.results);
      }
    };
    fetchJson();
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <>
          {data.map((item, key) => (
            <div className="list">
              <h3>{item.title}</h3>
              <small className="list-overview">{item.overview}</small>
            </div>
          ))}
        </>
      ): <>
        <h1>You're not logged in</h1>
      </>}
    </>
  );
};

export default Home;
