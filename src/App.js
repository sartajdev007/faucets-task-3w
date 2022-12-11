import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes'

function App() {
  return (
    <div className="App font-face">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
