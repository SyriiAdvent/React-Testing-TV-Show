import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import parse from "html-react-parser";

import { formatSeasons } from "./utils/formatSeasons";

import Episodes from "./components/Episodes";
import "./styles.css";
import { fetchShows } from "./api/fetchShows";

export default function App() {
  const [isFetching, setIsFetching] = useState(false);
  const [show, setShow] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const episodes = seasons[selectedSeason] || [];

  useEffect(() => {
    fetchShows()
      .then(res => {
        setShow(res.data);
        setSeasons(formatSeasons(res.data._embedded.episodes))
      })
  }, []);

  const handleSelect = e => {
    setSelectedSeason(e.value);
  };

  if (!show) {
    return <h2>Fetching data...</h2>;
  }

  return (
    <div className="App">
      <img className="poster-img" src={show.image.original} alt={show.name} />
      <h1 data-testid='test-title'>{show.name}</h1>
      {parse(show.summary)}
      <Dropdown
        data-testid='test-dropdown'
        options={Object.keys(seasons)}
        onChange={handleSelect}
        value={selectedSeason || "Select a season"}
        placeholder="Select an option"
      />
      <Episodes episodes={episodes} />
    </div>
  );
}
