import Head from 'next/head'
import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import { SliderData } from '../components/SliderData'
import Fetching from '../components/Fetching'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Planet-R23</title>
        <meta name="description" content="Planet 852" />        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Universe C-176' message='I capture moments in the universe and keep them alive.' />
      <Fetching />
      <Slider slides={SliderData} />
      
    </>
  )
}
