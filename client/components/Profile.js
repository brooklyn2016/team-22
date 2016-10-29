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
      <div>
			   {this.props.user.firstName}
         </div>
         <div>

         {this.props.user.lastName}
         </div>

         <div>

         {this.props.user.username}
         </div>

         <div>

         {this.props.user.points}
         </div>

         <div>

         {this.props.user.zipCode}
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
