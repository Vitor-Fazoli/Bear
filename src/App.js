import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Auth } from './components/auth';
import { CreateCharacter } from './components/create_character';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/create_character' element={<CreateCharacter />} />
      </Routes>
    </div>
  );
}

export default App;
