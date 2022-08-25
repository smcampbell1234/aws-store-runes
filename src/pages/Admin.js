import React, {useState} from 'react';
import FormLine from "../components/FormLine";
import lodash from "lodash";
import {itemFields} from "../data/itemFields"

let url = "https://iu02eobxgk.execute-api.us-east-1.amazonaws.com/dev/products";
function Admin() {
  const [value,setValue] = useState({})
  const [error,setError] = useState({error:false,msg:""})

  const postProduct = async (newItem) => {
    try {
      const response = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(newItem)
      })
      console.log(response.json())
    } catch (err) {
      console.log("error posting shift",err)
    }
  }
  
  // validates requried fields, uses default for all others
  const handleSubmit = (e) => {
    e.preventDefault();
    let newItem = lodash.cloneDeep(value)
    let isValid = true;
    let missingFields = "";
    itemFields.forEach(item => {
      const [field,_,isRequired,deflt] = item;
      if (isRequired === "req" && !newItem[field]) {
        isValid = false;
        missingFields += " / " + field;
      } else {
        if (!newItem[field]) {
          newItem = {...newItem,[field]:deflt}
        }
      }
    })

    if (!isValid) {
      setError({error:true,msg:`Required fields ${missingFields}`})
    } else {
      console.log("..... SUBMIT NEWITEM : ",newItem)

      console.log(".... Attempting to post item")
      postProduct(newItem)





      setError({error:false,msg:""})
      setValue({})
    }
    
  }
  const changeValue = (e) => {
    setValue({...value,[e.target.name]: e.target.value})
  }

  return (
    <div className="admin-wrapper">
      <h1>Manage Store</h1>
      <form id="new-item-form" onSubmit={handleSubmit}>
        {itemFields.map(([field,description,required],idx) => (
          <FormLine 
            changeValue={changeValue} 
            field={field} 
            description={description} 
            value={value} 
            required={required}
            key={idx}
          />))
        }
        <button className="new-submit" type="submit">Add New Item</button>
        {
          error.error &&
          <div className="invalid-item-error">
            {error.msg}
          </div>
        }
        <div><span className="new-item-clear" onClick={() => setValue({})}>clear</span></div>
      </form>
    </div>
  )
}

export default Admin
