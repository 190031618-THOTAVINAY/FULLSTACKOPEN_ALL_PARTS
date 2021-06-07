import React from 'react'
import './index.css';
const App = () => {
  const courses = {
    course : 'Full Stack application development',
  }
  const part = [
   {
   part1 : 'Fundamentals of React , No of Exercises :',
   exercises1 : 10
   },
   {
   part2 : 'Using props to pass data , No of Exercises :',
   exercises2 : 7
   },
 {
   part3 : 'State of a component , No of Exercises :',
   exercises3 : 14
 }

]
  const total = 'Total No Of Exercises :'

  return (
   
    <div>
      <Header name={courses.course} />
      <Content part1={part[0].part1} exercises1 = {part[0].exercises1} />
      <Content part1={part[1].part2} exercises1 = {part[1].exercises2} />
      <Content part1={part[2].part3} exercises1 = {part[2].exercises3} />
      <Total total={total} ans = {part[0].exercises1 + part[1].exercises2 +part[2].exercises3}/>
     </div>
  ) 
  }
const Header = (props) =>
{
  return(
     <h1>Course Name:-{props.name}</h1>
  )
}
const Content = (props)=>
{

  return(
    <div>
    <Part part={props.part1}  ex ={props.exercises1} />
    </div>
  
  

  )
}
  const Part =(p) =>
  {
    console.log(p.part , p.ex)
    return(
      <p>{p.part} {p.ex}</p>
      )
  }
const  Total = (props) =>
{
  console.log(props.total ,props.ans)
  return(
   <p>{props.total}{props.ans}</p>
  )
  
}


export default App