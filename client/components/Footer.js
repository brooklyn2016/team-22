import React from 'react';
import { Link } from 'react-router';

class FooterNav extends React.Component {
	render() {
		return (
      <nav>
        <Link to="/home">Modules </Link>
        <Link to="/friends">Friends</Link>
        <Link to="/Leaderboard">Leaderboard</Link>
      </nav>
		);
	}
}

export default FooterNav;
