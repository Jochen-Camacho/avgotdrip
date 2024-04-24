import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faYoutube,
  faXTwitter,
  faInstagram,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="icons">
      <a
        href="https://open.spotify.com/artist/7igrDEryu1H8kwrg2jMP06?si=9Ih4TfnsQi27aNhDZbRdFQ"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="icon icon-spotify" icon={faSpotify} />
      </a>
      <a
        href="https://www.youtube.com/channel/UCf_FChdIwtC_fV2BpbjwhIA"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="icon icon-youtube" icon={faYoutube} />
      </a>
      <a href="https://x.com/avgotdrip?s=20" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="icon icon-white" icon={faXTwitter} />
      </a>
      <a
        href="https://www.instagram.com/avgotdrip"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="icon icon-instagram" icon={faInstagram} />
      </a>
      <a
        href="https://music.apple.com/us/artist/avgotdrip/1552223020"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="icon icon-apple" icon={faApple} />
      </a>
    </div>
  );
}
