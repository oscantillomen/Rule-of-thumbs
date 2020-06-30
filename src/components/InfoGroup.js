import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoGroup = () => {
  return (
    <div className="infoGroupContainer" role="region">
      <div className="InfoGroup">
        <p className="InfoGroup--preNameText">What's your opinion on</p>
        <h1>Pope Francis?</h1>
        <p>
          He's talking tough on clergy sexual abuse, but is he just another
          papal perverting protector? (thumb down) or a true pedophile punishing
          pontiff? (thumbs up)
        </p>
        <a
          href="https://es.wikipedia.org/wiki/Francisco_(papa)"
          target="_blank"
          aria-label="Read more about Pope Francis"
        >
          <FontAwesomeIcon icon={["fab", "wikipedia-w"]} /> More information
        </a>
        <h2>What's Your Veredict?</h2>
      </div>
      <div className="thumbs">
        <button className="thumbsUp" aria-label="Thumbs up to Pope Francis">
          <FontAwesomeIcon icon="thumbs-up" />
        </button>
        <button className="thumbsDown" aria-label="Thumbs down to Pope Francis">
          <FontAwesomeIcon icon="thumbs-down" />
        </button>
      </div>
    </div>
  );
};

export default InfoGroup;
