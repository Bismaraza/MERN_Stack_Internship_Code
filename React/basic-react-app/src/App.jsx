
import './App.css'
// import viteLogo from './assets/vite.svg'

// function Title() {
//   return <h1>I am the title</h1>;
// }

// function App() {

//   return <Title/>;
  
// }


// function App() {

//   const name = "Bisma";
//   const age = 22;
//   const course = "React JS";

//   return (
//     <>

//       <h1 color='Red'>Welcome to React</h1>

//       <p>This is my first React application.</p>

//       <hr />

//       <h2>Variables in JSX</h2>

//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//       <p>Course: {course}</p>

//       <hr />

//       <h2>JavaScript Expression</h2>

//       <p>10 + 20 = {10 + 20}</p>

//       <p>Age after 5 years = {age + 5}</p>

//       <hr />

//       <h2>Button</h2>

//       <button className="btn">Click Me</button>

//       <hr />

//       <h2>Image</h2>

//       <img
//         src={viteLogo}
//         alt="Placeholder"
//       />

//       <hr />

//       <h2>List</h2>

//       <ul>
//         <li>HTML</li>
//         <li>CSS</li>
//         <li>JavaScript</li>
//         <li>React</li>
//         <li>Tailwind</li>
//       </ul>

//     </>
//   );
// }

// export default App;



// function App() {

//   return (

//     <div className="bg-gray-100 p-10">

//       <div className="bg-white p-6 rounded-lg shadow-lg w-80">

//         <h1 className="text-2xl font-bold text-blue-600">
//           React Course
//         </h1>

//         <p className="text-gray-600 mt-3">
//           Learning React with Tailwind CSS.
//         </p>

//         <button className="bg-blue-500 text-white px-5 py-2 rounded mt-5">
//           Learn More
//         </button>

//       </div>

//     </div>

//   );

// }

// export default App;


function App() {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white w-80 p-6 rounded-xl shadow-lg text-center">

        <img
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto"
        />

        <h1 className="text-2xl font-bold mt-4">
          Bisma Raza
        </h1>

        <h3 className="text-gray-600 mt-2">
          MERN Stack Intern
        </h3>

        <p className="text-gray-500 mt-4">
          I am learning React.js and Tailwind CSS to become a Full Stack Developer.
        </p>

        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg mt-6 hover:bg-blue-600">
          Contact Me
        </button>

      </div>
    </div>
  );
}

<h1 className="text-red-500">
    Hello React
</h1>

export default App;