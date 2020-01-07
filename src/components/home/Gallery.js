import React from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const showGallery=(latestGallery)=>{

    if(latestGallery){
        return (
            <Slider {...settings}>
            {
                latestGallery.map((gallery)=>{
                    return(
                        <Link to={`/galleries/${gallery.id}`} className="slider-item" key={gallery.id}>
                        <div className='image' style={{background:`url(/images/galleries/${gallery.images[0].img})`}}>
                        <h3>{gallery.artist}</h3>
                        </div>
                        </Link>
                    )
                })
            }
            
            
            
            
            </Slider>
        )
    }

}

function Gallery({latestGallery}) {
    return (
        <div className="home-gallery">
        <h1>Awesome Gallery</h1>
            {showGallery(latestGallery.galleries)}
        </div>
    )
}

export default Gallery
