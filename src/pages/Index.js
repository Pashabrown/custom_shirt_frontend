import {useState} from "react"
import {Link} from "react-router-dom"
import {Dropdown} from '../components/Dropdown'
import {Dropdown2} from '../components/Dropdown2'
import "../design/Display.css"
import { Button } from '@material-ui/core';

function Index(props){
//adding a state to our new person creator form
//we will update these properties dynamically with
//our handle change function
    const [newForm, setNewForm] = useState({
        tshirtcolor: "black",
        imgTshirt: "",    
        upperText: "",
        lowerText: "",
        textsize: "",
        textcolor: ""
    });

  // handleChange function for form
  //i want to change the property that has the name of the input 
  //and I want the target to match the value
    const handleChange = (event) => {
      console.log(event.target.name)
      console.log(event.target.value)
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

  // handle submit function for form
    const handleSubmit = (event) => {
    //its passing the data from the form and bringing to the data base 
      //it just makes sure the page doesnt refresh itself
      //im gonna pass create people the state in our new form
      //after form updates I want it to go back to a blank form
      //so thats why we set new form
        event.preventDefault();
        props.createShirts(newForm);
        setNewForm({
            tshirtcolor: "",
            upperText: "",
            imgTshirt: "",    
            lowerText: "",
            textsize: "",
            textcolor: ""
        });
    };
// const imageColor = () => {


// }
    // loaded function
  const loaded = () => {

    
      return props.shirts.map((shirt) => (
          
          <div className="card card-content">
        
        <div key={shirt._id} className="shirt">
        
          <h1>T-Shirt Color is {shirt.tshirtcolor}</h1>
        <div className="imgTshirt text-center">
            
            <Link to={`/shirts/${shirt._id}`}>
                <img 
                className="img-responsive"
                src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${newForm.tshirtcolor}.png`}
                alt="imgTshirt"/>
            </Link>
        </div>
        <div className="memeText text-center">
            <div className="upperText">
                <p style={{fontsize:shirt.textsize, color:shirt.textcolor}}>{shirt.upperText}</p>
            </div>
            <img 
            src={shirt.imgTshirt}
            alt="meme-text"
            width="370px"
            height="370px"
            />
            <div className="lowerText">
                    <p style={{fontsize:shirt.textsize, color:shirt.textcolor}}>{shirt.lowerText}</p>
            </div>
        </div>
        
      
          
        
      </div>
      </div>
      
    ));
  };
  
  const loading = () => {
        return <h1>Loading...</h1>
    }

  // const urlImgBase = "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/";
  
  return <section>
      <form onSubmit={handleSubmit}>
        <Dropdown
          value={newForm.tshirtcolor}
          name="tshirtcolor"
          //tell the user knows what to type in there
          onChange={handleChange}
          
        />
        <input
          type="text"
          value={newForm.upperText}
          name="upperText"
          placeholder="upper text"
          onChange={handleChange}
        />
        <input
          type="text"
          //the value is connected to the image 
          value={newForm.imgTshirt}
          //the name is the image
          name="imgTshirt"
          //so the user knows what to put in that box
          placeholder="image url address link"

          onChange={handleChange}
        />
        
        <input
          type="text"
          value={newForm.lowerText}
          name="lowerText"
          placeholder="lower text"
          onChange={handleChange}
        />
        <input
          type={Number}
          value={newForm.textsize}
          name="textsize"
          placeholder="text size"
          onChange={handleChange}
        />
        <form onSubmit={handleSubmit}></form>
        <Dropdown2
          type="text"
          value={newForm.textcolor}
          name="textcolor"
          placeholder="text color"
          onChange={handleChange}
        />
        {/* <Button color="primary">Hello World</Button>; */}
        <Button color="primary" type="submit" value="Create New Shirt">Create New shirt</Button> 
      </form>
      {props.shirts ? loaded() : loading()}
    </section>
} 
export default Index