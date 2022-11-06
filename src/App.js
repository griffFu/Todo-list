import TodoList from "./Components/TodoList";
import PersonalInfo from "./Components/PersonalInfo";

function App() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="bg-slate-300 flex justify-center p-4">
        <h1>Resume Builder</h1>
      </div>
      <div className="bg-white flex-grow flex justify-center align-center">
        <div className="bg-white border border-solid border-black md:m-6  m-8 p-6 max-sm:flex-1 md:flex flex-col w-12/12 md:w-6/12">
          <PersonalInfo />
          <TodoList header = "Education"/>
          <TodoList header = "Skills"/>
          <TodoList header = "Projects"/>
        </div>
      </div>
      <div className="bg-slate-800 flex justify-center p-4">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default App;
