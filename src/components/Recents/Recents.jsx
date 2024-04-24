import React from "react";
import data from "../../data/songs.json";
import "./Recents.css";

export default function Recents() {
  const [songs, setSongs] = React.useState(data.tracks);
  const trackRef = React.useRef();
  const [istrackVisible, setIsTrackVisible] = React.useState();
  console.log(istrackVisible);

  React.useEffect(() => {
    if (istrackVisible) {
      trackRef.current.classList.add("inView");
    }
  }, [istrackVisible]);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsTrackVisible(entry.isIntersecting);
    }, []);
    observer.observe(trackRef.current);
  }, []);

  React.useEffect(() => {
    handleButtonSort("latest");
    document.querySelector(".latest").classList.add("buttonSortActive");
  }, []);

  let displaySongs = songs.map((song, index) => {
    return (
      <div key={index} className="track">
        <a href={song.link} target="_blank" rel="noreferrer">
          <img src={song.coverImage} className="coverImg" alt={song.title} />
          <h3 className="trackTitle">
            {song.title} •{" "}
            <span className="artists">{song.artists.join(", ")}</span>
          </h3>
        </a>
      </div>
    );
  });

  function handleButtonSort(eventOrSortType, sortTypeMaybe) {
    let sortType;
    if (typeof eventOrSortType === "string") {
      sortType = eventOrSortType;
    } else {
      sortType = sortTypeMaybe;
      document.querySelectorAll(".buttonSort").forEach((button) => {
        button.classList.remove("buttonSortActive");
      });
      eventOrSortType.currentTarget.classList.add("buttonSortActive");
    }

    let sortedSongs;
    switch (sortType) {
      case "latest":
        sortedSongs = [...songs].sort(
          (songA, songB) =>
            new Date(songB.releaseDate) - new Date(songA.releaseDate)
        );
        setSongs(sortedSongs);
        break;
      case "popular":
        sortedSongs = [...songs].sort(
          (songA, songB) => songB.popularity - songA.popularity
        );
        setSongs(sortedSongs);
        break;
      default:
        break;
    }
  }

  return (
    <div className="tracksCont">
      <div className="tracks" ref={trackRef}>
        <div className="tracksHeader">
          <h2 className="page-title">Tracks</h2>
          <ul className="sortCategories">
            <li>
              <button
                className="buttonSort"
                onClick={(event) => handleButtonSort(event, "popular")}
              >
                Popular
              </button>
            </li>
            <li>
              <button
                className="buttonSort latest"
                onClick={(event) => handleButtonSort(event, "latest")}
              >
                Latest
              </button>
            </li>
          </ul>
        </div>

        <div className="recent-tracks">{displaySongs}</div>
      </div>
    </div>
  );
}
