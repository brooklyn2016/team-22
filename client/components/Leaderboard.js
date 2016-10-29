import React from 'react';
import FooterNav from './Footer';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchLeaderBoard();
    console.log(this.props.leader);
  }


  renderLeaderboard() {
    let data = this.props.leader.friends;
    let rankData = null;
    if (data.length > 0) {
      rankData = data.map(rank => {
        return (
          <div className="" key={rank.name}>
            <span>{rank.name}-{rank.points}</span>
          </div>);
      });
    }
    return rankData;
  }

	render() {
		return (
      !this.props.leader ?
        <div>Loading...</div>
      :
			<div>
         {this.renderLeaderboard()}
         <FooterNav />
		 	</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    leader: state.leader.data
  }
}

export default connect(mapStateToProps, actions)(Leaderboard);
