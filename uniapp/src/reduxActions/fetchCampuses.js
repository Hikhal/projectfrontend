import axios from 'axios'
import { removeCampus } from './removeCamp'
// creating action
 const actiontype = 'FETCHCAMPUSES'

export const fetchAllCampuses = (payload) => {
    // console logging for testing
    console.log("fetching all campuses action")
    return {
        type: actiontype,
        payload: payload
    }
}

/**
 * The function returns an asynchronous function that takes a dispatch parameter.
 *  This function is the actual thunk function that will be executed when fetchAllCampusesThunk is invoked.
 */

export const fetchAllCampusesThunk = () => {
    return async (dispatch) => {
        try {
            const datalist = await axios.get(`${process.env.REACT_APP_BACKEND_URL_1}/api/campuses`)
            console.log(datalist.data)
            dispatch(fetchAllCampuses(datalist.data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const removeCampusThunk=(id)=>{
    return async (dispatch)=>{
        try{
            await axios.delete(`${process.env.REACT_APP_BACKEND_URL_1}/api/campuses/delete/${id}`);
            dispatch(removeCampus(id))
        }catch (error){
            console.log(error);
        }
    }
}