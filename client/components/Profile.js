import React from 'react';
import FooterNav from './Footer';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUsers();
    console.log('asda',this.props.user);
  }

	render() {
		return (
      !this.props.user ?
        <div>Loading...</div>
      :
      <div className="lesson-bg leader-bg">
        <div className="container  leaderboard-con">
         <div className="card card-block">
           <h4 className="card-title">{this.props.user.firstName} {this.props.user.lastName}</h4>
           <p>{this.props.user.points} points</p>
           <div><button className="btn btn-success profile-btn">EDIT INFORMATION</button></div>
           <div><button className="btn btn-success profile-btn">LOG OUT</button></div>
         </div>
         </div>
         <FooterNav />
		 	</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    user: state.auth.data
  }
}

export default connect(mapStateToProps, actions)(Profile);
