import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './About.scss';

const About = () => (
  <main className={s.container}>
    <h1>About</h1>
  </main>
);

export default withStyles(s)(About);
