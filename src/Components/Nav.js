import React, { Component } from 'react';

class Nav extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="buttons">
                <button className="prevNext" onClick={ e => this.props.navHandler(-1) }>{'< '} Previous</button>
                <div className="centerButtons">
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>New</button>
                </div>
                <button className="prevNext" onClick={ e => this.props.navHandler(1) }>Next{' >'}</button>
            </div>
        )
    }
}

export default Nav