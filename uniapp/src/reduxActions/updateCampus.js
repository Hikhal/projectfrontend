import axios from "axios";

const updateCampus=(newCampus)=>({
    type:"UPDATE_CAMPUS",
    payload:newCampus
});

export const updateCampusThunk=(url,newcampus)=>{
    return async (dispatch)=>{
        try{
            const updatedCampus= await axios.put(url,newcampus);
            console.log(updatedCampus)
            alert("Updated Info")
            dispatch(updateCampus(newcampus));

        }catch(error){
            console.log(error)
        }
    }
}