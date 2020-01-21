import React from 'react';
import {connect } from 'react-redux';


class UserHeader extends React.Component{

    
    render(){
        // this.props.user  destructuring this
        const {user} = this.props

        if (!user){
            return <div> Loading... </div>
        }
        return ( <div className= "header">{user.name} </div>)
    }
}
const mapStateToProps = (state, ownProps)=>{
    // we are filtering here, istead passing bunch of data into the application
    return { user: state.users.find(user => user.id===ownProps.UserId) }
}

export default  connect(mapStateToProps)(UserHeader);
// second argument, object with fetchUser


//

// whenever the component appears, we attempt to fetch the given user so, componetDIDMount
//call action creator and pass in the id we want to fetch
// We are passing collection of props, right now user id aalso access to the entire list of users
//Have to show 1 singular user
// We can do in map state to props function just passing what we need

// ownProps is the 2nd argument , this object is the reference to the prop are about to be sent to this ( USerheader)
//
//Issue
// We are fetching the small data for many  times, we are making lots of duplicate request for same users