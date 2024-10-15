import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './store/testSlice';
import { Questions } from './components/Questions';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
