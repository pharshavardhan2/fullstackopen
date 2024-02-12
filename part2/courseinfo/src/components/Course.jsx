const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Total = ({ sum }) => <p><strong>total of {sum} exercises</strong></p>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part} />)}
      <Total sum={parts.reduce((sum, part) => sum + part.exercises, 0)} />
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header text={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

export default Course