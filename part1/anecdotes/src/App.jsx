import { useState } from 'react'

const Anecdote = ({ heading, content, votes }) => {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{content}</p>
      <p>has {votes} votes</p>
    </div>
  );
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [ selected, setSelected ] = useState(0);
  const [ points, setPoints ] = useState(new Array(anecdotes.length).fill(0));
  const [ maxIndex, setMaxIndex ] = useState(0);

  const handleVoteClick = () => {
    const copyPoints = [...points];
    copyPoints[selected] += 1;
    if (copyPoints[selected] > copyPoints[maxIndex]) setMaxIndex(selected);
    setPoints(copyPoints);
  }

  const handleNextClick = () => setSelected(Math.floor(Math.random() * anecdotes.length));

  return (
   <div>
    <Anecdote heading='Anecdote of the day' content={anecdotes[selected]} votes={points[selected]} />
    <Button onClick={handleVoteClick} text='vote' />
    <Button onClick={handleNextClick} text='next anecdote' />
    <Anecdote heading='Anecdote with most votes' content={anecdotes[maxIndex]} votes={points[maxIndex]} />
   </div>
  );
};

export default App;
