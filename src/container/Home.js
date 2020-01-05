import React, { Component } from 'react';
import LatestNews from '../components/home/LatestNews'
import {connect} from 'react-redux'
import getArticles from '../redux/actions/index'



class Home extends Component {
    componentDidMount(){
       this.props.latestNews();  
    }
    render() {
        return (
            <div className="Home">
            <LatestNews latest={this.props.article}/>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        article:state.news
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        latestNews:()=>{
            return dispatch(getArticles())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);