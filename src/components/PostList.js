import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPosts();
	}
	renderList() {
		return this.props.posts.map(post => {
			return (
				<div className="item ">
					<i className="large middle aligned icon user" />
					<div className="content">
						<div className="description">
							<h2>{post.title}</h2>
							<p>{post.body}</p>
						</div>
					</div>
				</div>
			);
		});
	}
	// mathi ko post.title ra body is from api
	render() {
		console.log(this.props.fetchPosts());
		return <div className="ui relaxed divided list">{} </div>;
	}
}
//this state will hold posts that our reducer has returned

const mapStateToProps = state => {
	return { posts: state.posts };
};

export default connect(
	mapStateToProps,
	{ fetchPosts: fetchPosts }
)(PostList);
