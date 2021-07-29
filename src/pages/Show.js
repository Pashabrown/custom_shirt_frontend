import {useState} from "react"
import {Dropdown2} from '../components/Dropdown2'
import {Dropdown} from '../components/Dropdown'

function Show(props) {
    //grab the id from the URL
  const id = props.match.params.id
  //put the people array in its variable
  const shirts = props.shirts
  //find the individual person in people array
  //p = the person im looping over -does this persons id match?

  //does this persons id property equal the id we are finding in the URL
  // find the individual person in people
    const shirt = shirts.find((p) => {
        return p._id === id
    })
    // console.log(person)

    //state for form
    //we're editing an existing account so we use person in use state
    //because we want their info already in the default
    const [editForm, setEditForm] = useState(shirt)

    //handlechange function for form
    //this will handle updating that state to handle that form
    const handleChange = (event) => {
        //this will recreate the state 
        setEditForm({
            ...editForm,
            //this is in array brackets because it a dynamic key
            [event.target.name]:event.target.value
        })
    } 
    
    const handleSubmit = (event) => {
        // to prevent refresh
        event.preventDefault()
        // update the person
        props.updateShirts(editForm, shirt._id)
        // redirect people back to index
        props.history.push("/")
    }

        const removeShirt = () => {
            props.deleteShirts(shirt._id)
            props.history.push("/")
        }

    return (

        
      
    <div className="shirt">
      {/* <h2>{shirt.upperText}</h2>
      <h1>{shirt.tshirtcolor}</h1>
      <h2>{shirt.lowerText}</h2>
      <h2>{shirt.textsize}</h2>
      <h2>{shirt.textcolor}</h2> */}
      
      <img 
      src={shirt.imgTshirt} 
      alt={shirt.name} 
      width="370px"
      height="370px"/>

      <button 
      id="delete" 
      onClick={removeShirt}>Delete</button>
        
        <form onSubmit={handleSubmit}>
            <Dropdown 
                type="text"
                value={editForm.tshirtcolor}
                name="tshirtcolor"
                placeholder="enter tshirtcolor"
                onChange={handleChange}
                
            />
            <input
                type="text"
                value={editForm.upperText}
                name="upperText"
                placeholder="upperText"
                onChange={handleChange}
            />
            <input
                type="text"
                value={editForm.imgTshirt}
                name="imgTshirt"
                placeholder="image"
                onChange={handleChange}
            />
            
            <input
                type="text"
                value={editForm.lowerText}
                name="lowerText"
                placeholder="lowerText"
                onChange={handleChange}
            />
            <input
                type={Number}
                value={editForm.textsize}
                name="textsize"
                placeholder="textsize"
                onChange={handleChange}
            />
            <Dropdown2
          type="text"
          value={editForm.textcolor}
          name="textcolor"
          placeholder="text color"
          onChange={handleChange}
        />
            <input type="submit" value="Update Person"/>
            
        </form>
    </div>
  )
}

export default Show