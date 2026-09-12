import './App.css'
import Nav from './assets/Components/Nav'
import HeroBanner from './assets/Components/HeroBanner'
import Footer from './assets/Components/Footer'
import TechCard from './assets/Components/DataCard/TechCard'
import type { CardTypeProps } from './assets/Components/Type/CardType'
import { useState } from 'react'
import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const cardFetch = async (): Promise<CardTypeProps[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};

// const cardPromise = cardFetch();

function App() {
  const [cardPromise] = useState (()=>cardFetch());

  return (
    <>
      <Nav></Nav>
      <HeroBanner></HeroBanner>

    <Suspense fallback={ <h2>Loading....</h2> }>
      <TechCard promise = {cardPromise}></TechCard>
    </Suspense>
    <ToastContainer position="bottom-right" autoClose={2000} />

      <Footer></Footer>
    </>
  )
}


export default App