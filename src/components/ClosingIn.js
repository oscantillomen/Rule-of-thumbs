import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ClosingIn = () => (
  <div className="closingIn">
    <div className="closingIn--text">
      <span
        css={css`
          margin-right: 15px;
          color: white;
          font-weight: 500;
        `}
      >
        CLOSING IN
      </span>
    </div>
    <div className="closingIn--days">
      <span className="closingIn--days-number">
        22 <span style={{ fontWeight: "lighter" }}>days</span>
      </span>
    </div>
  </div>
);

export default ClosingIn;
