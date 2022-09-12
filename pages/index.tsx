import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import FlowGrid from '../components/FlowGrid'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>flowstack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ResponsiveAppBar />

      <FlowGrid />
      
      <footer>
      </footer>
    </div>
  )
}

export default Home
