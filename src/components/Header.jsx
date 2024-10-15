import React from 'react'
import { useSelector } from 'react-redux'

export const Header = () => {
    const score = useSelector(state => state.user.score);
  return (
    <header className='header'>
        <h2>Player: No name</h2>
        <h2>Score: {score}</h2>
    </header>
  )
}
