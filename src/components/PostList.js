import React from 'react'
import {connect } from 'react-redux';
import {fetchPosts } from '../actions'

class PostList extends React.component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    render (){
        return (<div>PostList</div>)
    }
}
const mapStateToProps =(state)=>{

}


export default  connect(null, {fetchPosts:fetchPosts})(PostList);