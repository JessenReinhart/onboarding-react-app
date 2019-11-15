import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentData, setMovieList } from "../reducer/actions";

const Home = ({history}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isPop, togglePop] = useState(false);
  const isLoggedIn = useSelector(state => state.logged);
  const [currentItem, setCurrent] = useState({});

  useEffect(() => {
    const fetchJson = async () => {
      if (localStorage.isLoggedIn) {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=1967171a7fb0f71db60ca6c465e05f1d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        );
        let parsedData = await response.json();
        dispatch(setMovieList(parsedData.results))
        setData(parsedData.results);
      }
    };
    fetchJson();
  },);

  const closePopup = () => {
    togglePop(false);
  };

  const checkKey = e => {
    const index = e.target.id;
    const itemId = data[index].id
    history.push(`/details/${itemId}`)
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          {data.map((item, key) => (
            <div className="list" key={key}>
              <h3 onClick={checkKey} id={key}>
                {item.title}
              </h3>
              <small className="list-overview">{item.overview}</small>
            </div>
          ))}
        </>
      ) : (
        <>
          <h1>You're not logged in</h1>
        </>
      )}
    </>
  );
};

export default Home;
