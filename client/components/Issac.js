import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FooterNav from './Footer';

              // <ol className="carousel-indicators">
              //   <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              //   <li data-target="#myCarousel" data-slide-to="1"></li>
              //   <li data-target="#myCarousel" data-slide-to="2"></li>
              // </ol>
class Issac extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		return (
			<div className="lesson-bg">

        <h3 className="display-3">{this.props.lessons.lesson[0].lessonName}</h3>

        <div className="container">
      
          <div id="myCarousel" className="carousel slide" data-wrap="false" data-ride="carousel">


              <div className="carousel-inner" role="listbox">
                <div className="item active">
                <p className="objective">Objective</p>
                <p className="content">{this.props.lessons.lesson[0].objective}</p>

                </div>

                <div className="item">
                <p>
                {this.props.lessons.lesson[0].background[0].title}
                <br />

                {this.props.lessons.lesson[0].background[0].desc}
                </p>

                </div>

                <div className="item">
                <p>
                {this.props.lessons.lesson[0].background[1].title}
                <br />
                {this.props.lessons.lesson[0].background[1].desc}
                </p>
                <div className="carousel-caption">
                  <Link className="btn btn-success" to={'/q1'}>
                    BEGIN MODULE
                  </Link>
                </div>
                </div>
              </div>

              <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

        <FooterNav />
		 	</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    lessons: state.lessons.data
  }
}

export default connect(mapStateToProps, null)(Issac);
