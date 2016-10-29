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
            <div className="card card-block">
              <h4 className="card-title">{rank.name} - {rank.points}</h4>
              <button className="btn btn-success btn-challenge">CHALLENGE FRIEND</button>
            </div>
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
      <div className="lesson-bg leader-bg">
        <div className="container  leaderboard-con">
          <button className="btn btn-info leaderboard-btn">TODAY <div className="arrow-down"></div></button>
          <button className="btn btn-danger leaderboard-btn">ADD FRIEND</button>
          {this.renderLeaderboard()}
        </div>
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
