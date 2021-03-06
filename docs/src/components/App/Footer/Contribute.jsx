import React from 'react';
import { Button, Cell } from 'react-md';
import { Link } from 'react-router-dom';
import { GITHUB_URL } from 'constants/application';

const Contribute = () => (
  <Cell component="section" size={8}>
    <h4 className="md-title">Contributing</h4>
    <p className="md-body-2">
      Please read the contributing guidelines
      &nbsp;
      <Link to="/discover-more/contributing" className="link">
        here
      </Link>
      &nbsp;
      for some more details or on the github link below.
    </p>
    <Button flat secondary href={GITHUB_URL} iconClassName="fa fa-github">
      Github
    </Button>
  </Cell>
);

export default Contribute;
