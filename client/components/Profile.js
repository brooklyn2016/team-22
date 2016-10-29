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
			<div>
			   {this.props.user.firstName}
         {this.props.user.lastName}
         {this.props.user.username}
         {this.props.user.points}
         {this.props.user.zipCode}

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
