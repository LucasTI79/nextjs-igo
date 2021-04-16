import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import { useFacebook } from '../src/hooks/useFacebook'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
      const timeoutRef = React.useRef();
      // Initialize Facebook widget(s) in 2 seconds after
      // the component is mounted.
      useFacebook({ xfbml: false }, FB => {
        if (timeoutRef.current !== null) {
          timeoutRef.current = setTimeout(() => {
          }, 2000);
        }
      });


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
          <script dangerouslySetInnerHTML = {{
                        __html: `window.fbAsyncInit = function () {
                            FB.init ({
                                xfbml: true,
                                versão: 'v10.0'
                                });
                            };
                            `
                    }} />


          <div
            className="fb-customerchat"
            attribution="install_email"
            page_id="503018133206953"
            theme_color="#44bec7"
            logged_in_greeting="Olá! Como posso te ajudar?"
            logged_out_greeting="Olá! Como posso te ajudar?">
          </div>
          <div id = "fb-root"> </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
