import {combineReducers} from 'redux'
import {newsReducer} from './newsReducer'
import {galleryReducer} from './galleryReducer'


const rootReducer=combineReducers({
    news:newsReducer,
    gallery:galleryReducer

})

export default rootReducer