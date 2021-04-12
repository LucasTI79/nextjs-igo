import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import MessengerChat from '../Utils/MessengerChat'
import MessengerCustomerChat from 'react-messenger-customer-chat';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut" href="/public/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css"
            integrity="sha256-x8PYmLKD83R9T/sYmJn1j3is/chhJdySyhet/JuHnfY="
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          {/* <MessengerChat
            pageId="503018133206953"
            ref="fb-msgr"
          /> */}
           <MessengerCustomerChat
            pageId="503018133206953"
            appId="225797349312699"
            // htmlRef={window.location.pathname}
          />,
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
