import React from 'react'
  
const App = () => {
  const object1 = {
   courses : "Full Stack Web Development"
  }
  const object2 = {
   part1 : 'Fundamentals of React',
   exercises1 : 10
  }
 const object3 = {
   part2 : 'Using props to pass data',
   exercises2 : 7
  }
 const  object4 = {
   part3 : 'State of a component',
   exercises3 : 14
  }
  const total = 'No of Exercises'

  return (
    <div>
      <Header name={object1.courses} />
      <Content part1={object2.part1} exercises1 = {object2.exercises1} />
      <Content part2={object3.part2} exercises2 = {object3.exercises2} />
      <Content part3={object4.part3} exercises3 = {object4.exercises3}/>
      <Total total={total} ans = {object2.exercises1  + object3.exercises2 + object4.exercises3}/>
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
    <Part part={props.part1}  ex ={props.exercises1} />
    <Part part={props.part2}  ex= {props.exercises2} />
    <Part part={props.part3}  ex={props.exercises3}  />
    </p>
  
  

  )
}
  const Part =(p) =>
  {
    return(
      <p>{p.part} {p.ex}</p>
      )
  }
const  Total = (props) =>
{
  return(
      <p>{props.total} {props.ans} </p>
  )
}

export default App