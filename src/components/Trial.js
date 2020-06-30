import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Trial = ({ data: { id, name, time, category, description, image, votes }, persons, setPersons }) => {
	const style = { backgroundImage: `url('${image}')` };

	const [ vote, setVote ] = useState(null);
	const [ voted, setVoted ] = useState(false);
	const [ upPercent, setUpPercent ] = useState(0);
	const [ downPercent, setDownPercent ] = useState(0);

	const handleSubmitVote = () => {
        if(vote) {
            let newPersons = [ ...persons ];
    
            const index = newPersons.findIndex((item) => item.id === id);
    
            if (vote === 'thumbsUp') {
                newPersons[index].votes.up += 1;
            } else if (vote === 'thumbsDown') {
                newPersons[index].votes.down += 1;
            }
            setVote(null)
            setPersons(newPersons);
            setVoted(true)   
            calcularPorcentaje()
        }
    };
    
    const calcularPorcentaje = () => {
        const upPercent = (votes.up / (votes.up + votes.down)) * 100
        const downPercent = (votes.down / (votes.up + votes.down)) * 100
        setDownPercent(Math.round(downPercent))
        setUpPercent(Math.round(upPercent))
    }

	const selectThumb = (e) => {
		if (
			e.target.parentNode.classList.contains('fa-thumbs-down') ||
			e.target.classList.contains('voteDown') ||
			e.target.classList.contains('fa-thumbs-down')
		) {
			document.getElementById(`voteDown-${id}`).classList.add('selected');
			document.getElementById(`voteUp-${id}`).classList.remove('selected');
			setVote('thumbsDown');
		} else if (
			e.target.parentNode.classList.contains('fa-thumbs-up') ||
			e.target.classList.contains('voteUp') ||
			e.target.classList.contains('fa-thumbs-up')
		) {
			document.getElementById(`voteUp-${id}`).classList.add('selected');
			document.getElementById(`voteDown-${id}`).classList.remove('selected');
			setVote('thumbsUp');
		}
	};

	return (
		<article className="trial" style={style}>
			<div className="trial--infoContainer">
				<div className="trial--infoContainer--name">
					<span className={`trial--infoContainer--name-thumb ${upPercent >= downPercent ? 'thumbsUpColor' : 'thumbsDownColor'}`}>
                        {
                            upPercent >= downPercent
                                ?   <FontAwesomeIcon icon="thumbs-up" />
                                :   <FontAwesomeIcon icon="thumbs-down" />
                        }
					</span>
					<h1 className="trial--infoContainer--name-name">{name}</h1>
				</div>
				<p className="trial--infoContainer--info">
					<strong>{time}</strong> in {category}
				</p>
				<p className="trial--infoContainer--description">
                    {voted ? 'Thank you for voting' : description}
                </p>
                <div className="trial--infoContainer--vote">
                {   voted ? (
                        <button className="vote" onClick={() => setVoted(false)}>
                            Vote Again
                        </button>
                    ) : (
                        <>
                            <button id={`voteUp-${id}`} className="voteUp up" onClick={selectThumb}>
                                <FontAwesomeIcon icon="thumbs-up" />
                            </button>
                            <button id={`voteDown-${id}`} className="voteDown down" onClick={selectThumb}>
                                <FontAwesomeIcon icon="thumbs-down" />
                            </button>
                            <button className="vote" onClick={handleSubmitVote}>
                                Vote Now
                            </button>
                        </>
                    )
                }
                </div>
                <div className="trial--infoContainer--score" >
                    { downPercent !== 100 && (
                        <div className="trial--infoContainer--score-up" style={{ width: !upPercent && !downPercent ? '50%' : `${upPercent}%`}}>
                            <FontAwesomeIcon icon="thumbs-up" />
                            <span className="trial--infoContainer--score-up-up">
                                <p>{ upPercent || 50 }%</p>
                            </span>
                        </div>)
                    }

                    { (upPercent !== 100) &&
                        <div className="trial--infoContainer--score-down" style={{ width: !upPercent && !downPercent ? '50%' : `${downPercent}%` }}>
                            <FontAwesomeIcon icon="thumbs-down" />
                            <span className="trial--infoContainer--score-down-down">
                                <p>{ downPercent || 50 }%</p>
                            </span>
                        </div>
                    }
                </div>
			</div>
		</article>
	);
};

export default Trial;
