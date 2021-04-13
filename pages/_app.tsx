import { AnimateSharedLayout } from 'framer-motion'
import React from 'react'
import Head from 'next/head'
import MessengerCustomerChat from 'react-messenger-customer-chat';

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
        {/* <MessengerChat
            pageId="503018133206953"
            ref="fb-msgr"
          /> */}
          {/* <MessengerCustomerChat
            pageId="503018133206953"
            appId="225797349312699"
            // htmlRef={window.location.pathname}
          /> */}
      </Layout>
    </AnimateSharedLayout>
  )
}

export default MyApp
