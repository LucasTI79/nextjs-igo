import { AnimateSharedLayout } from 'framer-motion'
import React from 'react'
import Head from 'next/head'

import '../styles/tailwind.css'
import '../styles/globals.css'

import Layout from '../components/Layout'
import MessengerChat from '../Utils/MessengerChat'

function MyApp({ Component, pageProps }) {
   return (
    <AnimateSharedLayout>
      <Layout>
        <Head>
          <title>IGO | Instituto Galindo de Odontologia</title>
        </Head>
        <Component {...pageProps} />

        <MessengerChat
          pageId="503018133206953"
          ref="fb-msgr"
        />

      </Layout>
    </AnimateSharedLayout>
  )
}

export default MyApp
