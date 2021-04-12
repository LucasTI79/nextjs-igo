import { AnimateSharedLayout } from 'framer-motion'
import React from 'react'
import Head from 'next/head'

import '../styles/tailwind.css'
import '../styles/globals.css'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },[])
  return (
    <AnimateSharedLayout>
      <Layout>
        <Head>
          <title>IGO | Instituto Galindo de Odontologia</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>
  )
}

export default MyApp
