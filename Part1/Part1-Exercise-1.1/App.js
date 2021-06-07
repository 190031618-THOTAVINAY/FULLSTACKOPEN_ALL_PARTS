import React from 'react'

const App = () => {
  const courses = "Full Stack Web Development"
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const part4 = 'Functions'
  const exercises4 = 16
  const total = "No Of Exercises:"

  return (
    <div>
      <Header name={courses} />
      <Content part1={part1} exercises1 = {exercises1} />
      <Content part2={part2} exercises2 = {exercises2}/>
      <Content part3={part3} exercises3 = {exercises3}/>
      <Content part4={part4} exercises4 = {exercises4} />
      <Total total={total} ans = {exercises1  + exercises2 + exercises3 + exercises4}/>
      
      
     </div>
  )
}
const Header = (props) =>
{
  return(
 <h1>Name of Course is:-{props.name}</h1> 
  )
}
const Content = (props)=>
{
  return(
    <p>
    {props.part1}  {props.exercises1}
    {props.part2} {props.exercises2}
    {props.part3} {props.exercises3}
    {props.part4}  {props.exercises4}
    </p> 

  )
}
const  Total = (props) =>
{
  return(
      <p>{props.total} {props.ans} </p>
  )
}

export default App