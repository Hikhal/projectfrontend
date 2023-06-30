import axios from 'axios'

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
    const apikey = ''
    return async (dispatch) => {
        try {
            const datalist = await axios.get(api)
            dispatch(fetchAllCampuses(datalist.data))
        } catch (error) {
            console.log(error)
        }
    }
}