import React, { useState } from 'react'
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const[allproducts , setAll] = useState([])
   
  const Good = () =>
  {
    setAll(allproducts.concat(setGood(good+1)))
  }
  const Neutral = () =>
  {
    setNeutral(neutral+1)
    setAll(allproducts.concat('R'))
  }
  const Bad = () =>
  {
    setBad(bad+1)
    setAll(allproducts.concat('B'))
  }
  console.log(allproducts.length)

  return (
    <div>
    <h1>give feedback</h1>      
      
      <Button handleClick={Good} text="Good" />
      <Button handleClick={Neutral} text="Netural" />
      <Button handleClick={Bad} text="Bad" />
      <Statistics allproducts= {allproducts} 
      good = {good}
      neutral = {neutral}
      bad = {bad}
      />
     
    </div>
  )
}
const Statistics = (p) =>
{
  const m = p.allproducts
  if(m.length >= 1)
  {
  return(
    <table border ='1' cellSpacing="1" cellPadding="2px">
<div>
      <th>
      <tr><td><p>Good:-{p.good}</p></td></tr>
   <tr><td><p>Neutral:-{p.neutral}</p></td></tr>
  <tr><td> <p>Bad:-{p.bad}</p></td></tr>
  <tr><td> <p>All:-{p.good+p.neutral+p. bad}</p></td></tr>
  <tr><td> <h2>Statistics</h2></td></tr>
  <tr><td> <p>Average:-{p.good + p.neutral + p.bad / 3}</p></td></tr>
  <tr><td> <p>Positive Percentage:-{p.good + p.neutral /2}%</p> </td></tr>   
   </th>
</div>
</table>
  )
  }
  return  <p>No Feedback given</p>
}

export default App