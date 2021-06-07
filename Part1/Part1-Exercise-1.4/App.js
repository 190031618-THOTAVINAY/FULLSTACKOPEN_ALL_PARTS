import React from 'react'
  
const App = () => {
  const part = [
   {
   courses : "Full Stack Web Development"
   },
   {
   part1 : 'Fundamentals of React',
   exercises1 : 10
   },
   {
   part2 : 'Using props to pass data',
   exercises2 : 7
   },
 {
   part3 : 'State of a component',
   exercises3 : 14
  }
]
  const total = 'No of Exercises'

  return (
   
    <div>
      <Header name={part[0].courses} />
      <Content part1={part[1].part1} exercises1 = {part[1].exercises1} />
      <Content part1={part[2].part2} exercises1 = {part[2].exercises2} />
      <Content part1={part[3].part3} exercises1 = {part[3].exercises3} />
      <Total total={total} ans = {part[1].exercises1 + part[2].exercises2 +part[3].exercises3}/>
     </div>
  ) 
}
const Header = (props) =>
{
  console.log(props.name)
  return(
     <h1>{props.name}</h1>
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