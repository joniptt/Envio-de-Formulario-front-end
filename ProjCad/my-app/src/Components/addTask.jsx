import React, { useState } from "react"
import "./addTask.css"
import Button from "./button"

const AddTask = ({ handleTaskAddiction }) => {
  const [inputData, setInputdata] = useState("")
  const handleInputchange = (e) => {
    setInputdata(e.target.value)
  }
  const handleTaskClick = () => {
    handleTaskAddiction(inputData)
  }
  return (
    <>
      <div className="add-Task-containner">
        <input
          onChange={handleInputchange}
          value={inputData}
          className="add-Task-input"
          type="text"
        />
        <div className="button-containner">
          <Button onClick={handleTaskClick}>Adicionar</Button>
        </div>
      </div>
    </>
  )
}

export default AddTask
