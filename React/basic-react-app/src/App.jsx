
import './App.css'
import viteLogo from './assets/vite.svg'

// function Title() {
//   return <h1>I am the title</h1>;
// }

// function App() {

//   return <Title/>;
  
// }


function App() {

  const name = "Bisma";
  const age = 22;
  const course = "React JS";

  return (
    <>

      <h1 color='Red'>Welcome to React</h1>

      <p>This is my first React application.</p>

      <hr />

      <h2>Variables in JSX</h2>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Course: {course}</p>

      <hr />

      <h2>JavaScript Expression</h2>

      <p>10 + 20 = {10 + 20}</p>

      <p>Age after 5 years = {age + 5}</p>

      <hr />

      <h2>Button</h2>

      <button className="btn">Click Me</button>

      <hr />

      <h2>Image</h2>

      <img
        src={viteLogo}
        alt="Placeholder"
      />

      <hr />

      <h2>List</h2>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Tailwind</li>
      </ul>

    </>
  );
}

export default App;

