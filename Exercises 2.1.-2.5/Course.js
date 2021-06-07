import React from 'react'

const Course = ({ props } ) =>
{

    return(
        <div>
   <Header head={props}/>
   <Content parts={props.parts}/>
   <Total total = {props.parts} />
  </div>
    );
    
}


const Header = ({head}) =>
{
    return(

      <h2>{head.name}</h2>
    );
}
const Content = ({parts}) =>
{
   return(
            parts.map((i) =>(<Part part={i}/>))  
    )
}
const Part = ({part}) =><p>{part.name} : {part.exercises}</p>

const Total = ({total}) =>

 {

 const redex = total.reduce((s, p) => s + p.exercises,0);
  return <strong>No Of Total Exercises: {redex}</strong>   
}



 export default Course