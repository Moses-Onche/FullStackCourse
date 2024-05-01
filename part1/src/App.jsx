// Header component
const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
};

// Part component
const Part = (props) => {
  // console.log("Part props: ", props.item.name)
  return (
    <p>
      {props.item.name} {props.item.exercises}
    </p>
  )
}

// Content component
const Content = (props) => {
  // console.log("Content props: ", props.part1);
  return (
    <>
      <Part item={props.part1} />
      <Part item={props.part2} />
      <Part item={props.part3} />
    </>
  )
}

// Total component
const Total = (props) => {
  console.log();
  return (
    <p>
      Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}
    </p>
  )
}

function App() {
  const course = 'Half stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App
