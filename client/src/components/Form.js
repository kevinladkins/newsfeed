import React from 'react'

const Form = ({fields, handleChange, handleSubmit, submitValue, message}) => {
  const formFields = fields.map(field => {
    return (
      <div>
        <label>{field.label} </label>
        <input type={field.type} name={field.name} value={field.value} onChange={handleChange} /><br />
      </div>
    )
  })
  return (
    <form onSubmit={handleSubmit} >
      {formFields}
      <input type="Submit" className="button" value={submitValue} /><br />
      <span>{message}</span>
    </form>
  )
}

export default Form
