import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Metric = ({ text, value }) => <p>{text} {value}</p>

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good  - bad) / all;
  const positive = good / all * 100;

  if (all === 0) return(<div>No feedback given</div>)

  return (
    <>
      <h1>statistics</h1>
      <Metric text='good' value={good} />
      <Metric text='neutral' value={neutral} />
      <Metric text='bad' value={bad} />
      <Metric text='all' value={all} />
      <Metric text='average' value={average} />
      <Metric text='positive' value={positive + ' %'} />
    </> 
  );
}

function App() {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);

  const handleClick = (setFunction, value) => () => setFunction(value); 

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleClick(setGood, good + 1)} text='good' />
      <Button onClick={handleClick(setNeutral, neutral + 1)} text='neutral' />
      <Button onClick={handleClick(setBad, bad + 1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
