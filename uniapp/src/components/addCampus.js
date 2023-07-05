import React, {useState} from 'react'
import axios from 'axios'

/**
 * The component contains an input field for each attribute of a camopus (name, address, image, description). 
 * It uses React hooks to maintain state for each of these fields and updates these state variables whenever the corresponding input field changes.
 *  When the form is submitted, it creates a new campus object with the current values of the input fields
 *  and sends a POST request to add this campus to a database. 
 * After submitting, it clears the input fields.
 */

const AddCampus = () => {
    const [name, setname] = useState("")
    const [img, setimage] = useState("")
    const [address, setaddress] = useState("")
    const [description, setdescription] = useState("")
    const [newcampus, setnewcampus] = useState(undefined)

    const setName = (event) => {
        setname(event.target.value)
    }

    const setImg = (event) => {
        setimage(event.target.value)
    }

    const setAddress = (event) => {
        setaddress(event.target.value)
    }

    const setDescription = (event) => {
        setdescription(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        //name.trim() //will return a falsey value if the the name is only whitespace or empty
        if (!name.trim()) {
            alert('Name is required');
            return;
        }

        // Only aplha numerical and spaces are allowed
        const nameRegex = /^[A-Za-z0-9\s]+$/;
        if (!nameRegex.test(name)) {
            alert('Name should contain only alphabets');
            return;
        }

        //Image is Required
        if (!img){
            alert("Image is Required")
            return;
        }

        //Adress should not be null
        if (!address){
            alert("Address Required")
            return;
        }

        //Descitption should not be null
        if (!description){
            alert("Description Required")
            return;
        }



        // Create campus Object
        const campus = {
            name,
            img,
            address,
            description
        }

        setnewcampus(campus) // just in case we need it smwhere else, not really necessary

        // clearing input fields for next input
        setname("")
        setimage("")
        setaddress("")
        setdescription("")


        try {
            await axios.post('process.env.REACT_APP_BACKEND_URLREACT_APP_BACKEND_URL/api/campuses', newcampus)
            alert(`Campus "${name}" Added`);
        } catch (error) {
            console.log(error)
        }
    }

    // Bug found on line 65, onSumbit was missing.
    return(
        <div>
            <form className='input-form' onSubmit={handleSubmit}> 
                <h2>Enter New Campus Information</h2>
                <input type='text' placeholder='Campus Name' value={name} onChange={setName}></input>
                <input type='text' placeholder='Campus Image' value={img} onChange={setImg}></input>
                <input type='text' placeholder='Campus Address' value={address} onChange={setAddress}></input>
                <input type='text' placeholder='Campus Description' value={description} onChange={setDescription}></input>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}
export default AddCampus
