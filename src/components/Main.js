
import {useEffect, useState} from "react"
import {Route, Switch} from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main(props){
    const [shirts, setShirts] = useState([])
    
    const URL = "https://pashabrown-shirt-api.herokuapp.com/shirts/"

    const getShirts = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setShirts(data)
    }

    const createShirts = async (shirt) => {
      console.log(shirt)
        await fetch(URL, {
            method: "post", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(shirt)
        })

        getShirts()
    }

    const updateShirts = async (shirt, id) => {
        // make the put request to update a one cheese
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(shirt)
        })
        // update list of one cheese
        getShirts()
    }

    const deleteShirts = async (id) => {
      //make delete request 
      await fetch(URL + id, {
        method: "delete",
      })
      //update list of people
      getShirts()
    }

    useEffect(() => {
        getShirts()
    }, [])
  
  
    return (
    <main>
        
      <Switch>
        <Route exact path="/">
          <Index shirts={shirts} createShirts={createShirts} />
        </Route>

        <Route
          path="/shirts/:id"
          //the way router props are made available is through this function
          //router props are "rp", we do this so show gets them as props. 
          //
          render={rp => (
            <Show 
              shirts={shirts}
              updateShirts={updateShirts}
              deleteShirts={deleteShirts}
              //because the router props are an object and 
              //Im going to spread the object so I can show all of its props
              //we do this so we can make each individual property its own props
              {...rp}
            />
          )}
        />
      </Switch>
    </main>
  )
}

export default Main