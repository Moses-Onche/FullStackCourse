// Header component
const Header = (props) => {
  // console.log(props.course.name)
  return (
    <h1>
      {props.course.name}
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
      <Part item={props.course.parts[0]} />
      <Part item={props.course.parts[1]} />
      <Part item={props.course.parts[2]} />
    </>
  )
}

// Total component
const Total = (props) => {
  // console.log(props.parts);
  return (
    <p>
      Number of exercises {props.course.parts[0].exercises +
          props.course.parts[1].exercises + props.course.parts[2].exercises}
    </p>
  )
}

function App() {
  const course = {
    name: 'Half stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
