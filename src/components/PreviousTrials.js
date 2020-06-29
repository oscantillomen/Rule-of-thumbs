import React, { lazy } from 'react';
import Alert from './Alert';
import PastTrials from './PastTrials';
import NewName from './NewName';

const PreviousTrials = () => (
    <section className="previousTrials">
        <Alert />
        <h1>Votes</h1>
        <PastTrials />
        <NewName />
    </section>
)

export default PreviousTrials;