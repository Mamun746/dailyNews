import React, { Component } from 'react';
import {connect} from 'react-redux'
import {handleLikes} from '../redux/actions'

class LikesCounter extends Component {

    addLike=(action)=>{
        const props=this.props
        const newLikes=action==='ADD'?[props.likes+1,props.dislike]:[props.likes,props.dislike+1]

        console.log(newLikes);
        

    }
    render() {
        return (
            <div>
               <h1>Do you feel about this news</h1>
               <div className="like" onClick={()=>this.addLike('ADD')}>
              <div> <p>{this.props.likes}</p></div>
               <div><i className="fa fa-thumbs-up"></i></div>
               </div>
               <div className="dislike" onClick={()=>this.addLike('REMOVE')}>
               <div><p>{this.props.dislike}</p></div>
               <div>
               <i className="fa fa-thumbs-down"></i>
               </div>
               </div>

            </div>
        );
    }
}

export default LikesCounter;