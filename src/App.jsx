
import { Suspense } from 'react'
import './App.css'
import Countries from './component/countries/countries'

const countriesPromise=fetch("https://restcountries.com/v3.1/all").then(res=>res.json())

function App() {
  

  return (
    <>
      <Suspense fallback={<h3>loading....</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
