import { useCounter } from './hooks/useCounter';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
   const { count, increment } = useCounter();

   return (
      <div className=" dark:bg-slate-950 w-full flex flex-col items-center justify-center min-h-screen dark:text-white">
         <div role="banner" className="flex gap-x-3 items-center">
            <a href="https://vitejs.dev" target="_blank">
               <img src={viteLogo} className="w-11" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>
         <h1>Vite + React</h1>
         <div className="flex p-2  flex-col items-center">
            <button role="button" className=" border-2 border-blue-700 px-5 py-2 rounded-md" onClick={increment}>
               count is: {count}
            </button>
            <p>
               Edit <code>src/App.tsx</code> and save to test HMR
            </p>
         </div>
         <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </div>
   );
}

export default App;
