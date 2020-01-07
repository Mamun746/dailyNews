import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchSelectedGallery,clearGallery} from '../redux/actions'
import Slider from 'react-slick'


const setting={
    dots:true,
    infinite:true,
    speed:500,
    arrows:false
}

class GalleryItem extends Component {

    componentDidMount(){
        this.props.selectedGallery(this.props.match.params.id)
    }
    componentWillUnmount(){
        this.props.clearGallery()
    }

    // renderGallery=({selected})=>{
    //     if(selected){
    //       let bal=selected[0]
    //      bal.map((hh)=>{
    //            console.log(hh.id)
    //            return(
    //                <div>{hh.id}</div>
    //            )
               
    //         })
            
    //     }
    // }

    render() {
        
        return (
            <div>
               <h1>Artists</h1>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
   
    
    return{
        gallery:state.gallery
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        selectedGallery:(id)=>{
            return dispatch(fetchSelectedGallery(id))
        },
        clearGallery:()=>{
            return dispatch(clearGallery())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GalleryItem);