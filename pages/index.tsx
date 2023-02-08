import Head from 'next/head'
import Loader from '../components/Loader/Loader'
import { useState } from 'react'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Experience from '../components/Experience/Experience'
import Work from '../components/Work/Work'


export default function Home() {
  const [isLoading, setLoading] = useState(true)
  const changeAfterAnimation = (value: boolean) => {
    setLoading(value)
  }

  return (
    <>
      <Head>
        <title>Marko | Portfolio</title>
        <meta name="description" content="Marko's portfolio" />
        <meta name="theme-color" content="#222831" />
      </Head>
      {isLoading ?
        <Loader changeAfterAnimation={changeAfterAnimation} />
        : <Layout>
          <NavBar />
          <Hero />
          <Experience />
          <Work />
        </Layout>}
    </>
  )
}
