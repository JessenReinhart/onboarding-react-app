import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "react-loader";

const Detailpage = ({ history, match }) => {
  const currentId = match.params.id;
  const isLoggedIn = useSelector(state => state.logged);
  const [item, setItem] = useState({});
  const [isLoaded, toggleLoad] = useState(false);

  useEffect(() => {
    if (!localStorage.isLoggedIn) {
      history.push("/");
    }
    const fetchJson = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${currentId}?api_key=1967171a7fb0f71db60ca6c465e05f1d&language=en-US`
      );
      let parsedData = await response.json();
      await toggleLoad(true);
      setItem(parsedData);
    };
    fetchJson();
    console.log(item);
  }, []);
  return (
    <Loader loaded={isLoaded}>
      <div className="details">
        <img
          src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
          alt=""
        />
        <h3>{item.title}</h3>
        <h5>{item.tagline}</h5>
        <small>{item.status}</small>
        <small class="overview">{item.overview}</small>
        <Link to="/" className="main-button">
          Close
        </Link>
      </div>
    </Loader>
  );
};

export default Detailpage;
