import React from 'react'

function FormLine({changeValue,field,description,value,required}) {
  return (
    <div className="new-form-row">
      <label className="new-item-label" htmlFor={field}>
        {field.charAt(0).toUpperCase() + field.slice(1)}
        {
          required === "req" && <span>*</span>
        }
      </label>
      <div>
        <input 
          className="new-item-input"
          name={field}
          value={!!value[field] ? value[field] : ""} 
          onChange={(e) => changeValue(e)}
        />
        <div className="new-item-description">{description}</div>
      </div>

    </div>
  )
}

export default FormLine
