import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="bg-slate-800 flex justify-center p-4">
        <h1>Resume Builder</h1>
      </div>
      <div className="flex-grow flex justify-center align-center bg-zinc-500">
        <div className="bg-white m-6 p-20 flex flex-col w-6/12">
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
