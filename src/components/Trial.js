import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Trial = ({ data: { name, time, category, description, image } }) => {
    const style = { 
        backgroundImage: `url('${image}')`,
    }
    return (
        <article 
            className="trial"
            style={style}
        >
            <div className="trial--infoContainer">
                <div className="trial--infoContainer--name">
                    <span className="trial--infoContainer--name-thumb">
                        <FontAwesomeIcon icon="thumbs-up" />
                    </span>
                    <h1 className="trial--infoContainer--name-name">{name}</h1>
                </div>
                <p className="trial--infoContainer--info">
                    <strong>{time}</strong> in {category}
                </p>
                <p className="trial--infoContainer--description">
                    {description}
                </p>
                <div className="trial--infoContainer--vote">
                    <button className="voteUp">
                        <FontAwesomeIcon icon="thumbs-up" />
                    </button>
                    <button className="voteDown">
                        <FontAwesomeIcon icon="thumbs-down" />
                    </button>
                    <button className="vote">Vote Now</button>
                </div>
                <div className="trial--infoContainer--score">
                    score
                </div>
            </div>
        </article>
    )
}

export default Trial;