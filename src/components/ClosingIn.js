import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const ClosingIn = () => (
	<div
		css={css`
			width: 100%;
			height: 60px;
			display: flex;
		`}
	>
		<div
			css={css`
				width: 30%;
				background-color: rgba(129, 128, 128, 0.5);
				height: 100%;
				display: flex;
				justify-content: flex-end;
                align-items: center;
                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    border-top: 5px solid transparent;
                    border-left: 5px solid rgba(129, 128, 128, 0.5);
                    border-right: 5px solid transparent;
                    border-bottom: 5px solid transparent;
                    bottom: 25px;
                    left: 30%;
                }
			`}
		>
            <span css={css`
                margin-right: 15px;
                color: white;
                font-weight: 500;
            `}>CLOSING IN</span>
		</div>
		<div
			css={css`
				background-color: rgba(242,242,242,0.5);
				width: 70%;
				height: 100%;
				display: flex;
				justify-content: flex-start;
				align-items: center;
			`}
		>
            <span css={css`
                margin-left: 15px;
                font-size: 2rem;
                font-weight: bold;
            `}>22 <span style={{ fontWeight: 'lighter'}}>days</span></span>
		</div>
	</div>
);

export default ClosingIn;
