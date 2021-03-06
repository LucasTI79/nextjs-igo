import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="author" content="Lucas Feitosa"/>
          <meta name="description" content="Clínica odontológica que te ajuda a cudiar da saúde. Acesse para ver nossos tratamentos e dicas para se cuidar"/>
          <meta name="keywords" content="dentista, clinico, implante, dtm, extração, ortodontia, metro, santana, tucuruvi, zona norte, são paulo" />
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
