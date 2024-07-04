import React from 'react'
import Header from './components/Header/Header'
import style from './App.module.scss'
import {Main} from './components/Main/Main'

export default function App() {
  return (
    <div className={style.container}>
      <Header/>
      <main>
      <Main/>
      </main>
    </div>
  )
}
