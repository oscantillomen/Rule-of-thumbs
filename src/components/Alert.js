import React from "react";

const Alert = () => (
  <div className="alert">
    <div className="alert-leftSide">
      <p>Speak out. Be heard.</p>
      <h1>Be counted</h1>
    </div>
    <div className="alert-rightSide">
      <p>
        Rule od thumbs is a crowd sourced of public opinion where anyone can
        speak out and speak freely. It's easy: You share your opinion, we
        analyze and put the data in a public report.
      </p>
    </div>
    <a className="alert-close" href="#" aria-label="Close alert">
      &times;
    </a>
  </div>
);

export default Alert;
