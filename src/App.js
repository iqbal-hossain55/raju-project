import './App.css';
import Home from './pages/Home/Home/Home';
import { 
  Routes,
  Route,
} from "react-router-dom";
import JobSeekers from './pages/JobSeekers/JobSeekers/JobSeekers'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/jobseekers" element={<JobSeekers/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
