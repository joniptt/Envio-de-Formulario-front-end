import React from "react"
import { useHistory, useParams } from "react-router-dom"
import Button from "./button"
import "./TaskDetails.css"

const TaskDetails = () => {
  const params = useParams()
  const history = useHistory()
  const handleTaskReturnClick = () => {
    history.goBack()
  }
  console.log(params)
  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleTaskReturnClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p></p>
      </div>
    </>
  )
}

export default TaskDetails
