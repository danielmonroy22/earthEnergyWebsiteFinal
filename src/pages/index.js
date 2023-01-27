import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import HomePage from 'components/HomePage'
import Savings from 'components/Savings'
import Design from 'components/Design'
import AboutUs from 'components/AboutUs'
import ContactUs from 'components/ContactUs'
import Footer from 'components/Footer'
import { Helmet } from 'react-helmet';





export default function Home() {
  return (
    <>
      <Head>
        <title>Earth Energy Power</title>
        <meta name="description" content="We are a solar company providing design, installation, and maintenance services. Our experts will help you find the best solar solution for your needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Helmet>
          <link rel="icon" href="/HeadIcon.png" type="image/png" />
        </Helmet>

        <meta name="robots" content="all" />
      </Head>
      <main>



        <HomePage />
        <Savings />
        <Design />
        <AboutUs />
        <ContactUs />
        <Footer />
      </main>

    </>
  )
}
