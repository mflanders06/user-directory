import React, { Component } from 'react'

class UserCard extends Component{
    constructor(props){
        super(props);

    }

    render(){
        let userIndex = this.props.currentIndex;
        let currentObject = this.props.users[userIndex];
        let userName = currentObject.name.first + ' ' + currentObject.name.last

        return(
            <div>
                <div className="userTop">
                    <div className="pageNumber"> {currentObject.id}/{this.props.users.length} </div>
                    <div className="userName"> {userName} </div>
                </div>
                    <div className="userInfoGroup">
                    <div className="userInfo"> <span className="title">From: </span>{currentObject.city}, {currentObject.country} </div>
                    <div className="userInfo"> <span className="title">Job Title: </span>{currentObject.title}</div>
                    <div className="userInfo"> <span className="title">Employer: </span>{currentObject.employer}</div>
                </div>
                <div className="favoriteGroup">
                <span className="title">FavoriteMovies: </span>
                <ol>{currentObject.favoriteMovies.map( ( val ) => <li>{val}</li>)}
                </ol>
                </div>
            </div>
        )
    }
}

export default UserCard