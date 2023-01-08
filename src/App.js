import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import Profile from './Profile';
import Teacher from './Teacher';
import Action from './Action';
import AddTeacher from './AddTeacher';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Profile' element={<Profile/>} />
          <Route path='/Teacher' element={<Teacher/>} />
          <Route path='/create' element={<Action/>} />
          <Route path='/AddTeacher' element={<AddTeacher/>} />
          <Route path='/AddTeacher/:id' element={<AddTeacher />} />
          <Route path='/create/:id' element={<Action />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
