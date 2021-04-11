import React from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import GoogleMapReact from 'google-map-react';
import ReactCardCarousel from "react-card-carousel";
import Link from 'next/link';
interface CardProps {
  href: string
  imgSrc: string
}
interface Marker {
  text: string,
  lat: number,
  lng: number
}

interface CardProps {
  describe?: string,
  imgSrc:string,
  href:string
}
interface CardProblems {
  text?:string,
  children?:any
}

const CONTAINER_STYLE = {
    position: "relative",
    height: "60vh",
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "middle"
}

const CARD_STYLE = {
    height: "200px",
    width: "200px",
    paddingTop: "80px",
    textAlign: "center",
    background: "#17a2b8",
    color: "#FFF",
    fontFamily: "sans-serif",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "10px",
    boxSizing: "border-box"
}

const defaultProps = {
  center: {
    lat: -23.486505,
    lng: -46.619315
  },
  zoom: 15
};

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delayChildren: 0.5,
      staggerChildren: 0.7
    }
  }
}

const MarkerReactComponent: React.FC<Marker> = ({ lat, lng, text }) => (
  <div className="gm-style-iw gm-style-iw-c " id="c">
    {/* style={{ maxWidth: 224, maxHeight: 253, minWidth:0}}> 14 16 */}
    <div className="gm-style-iw-d" id='d'>
      <div id='none'>
        <div className="poi-info-window gm-style" id='window-style'>
          <div id='none-2'>
            <div className="title full-width">
              Instituto Galindo de Odontologia
                </div>
            <div className="address">
              <div className="address-line full-width">
                Av. Nova Cantareira, 659 - Tucuruvi
              </div>
              <div className="address-line full-width">
                São Paulo - SP
              </div>
              <div className="address-line full-width">
                02331-001
              </div>
              <div className="address-line full-width">
                Brasil
            </div>
            </div>
          </div>
          <div>
          </div>
          <div >
            <a target="_blank"
              href="https://goo.gl/maps/Avq5zG8sYjGeQxD19">
              <span>Visualize no Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const CardProblems: React.FC<CardProblems> = ({ text, children }) => (
  <div style={{
    height: "200px",
    width: "200px",
    paddingTop: "20px",
    textAlign: "center",
    background: "#24BDBD",
    color: "#FFF",
    fontFamily: "sans-serif",
    fontSize: "14px",
    textTransform: "uppercase",
    borderRadius: "10px",
    boxSizing: "border-box"
}}>{children}</div>
)

const Card: React.FC<CardProps> = ({ describe, imgSrc, href }) => (
  <Link href={href}>
    <a href="">
      <div className="rounded-md border-2 border-white md:border-0 p-3">
        <div className="group relative">
          <img className="h-full w-full rounded-t-lg" src={imgSrc} />
        </div>
        <div className="p-5 rounded-b bg-igo-400">
          <h2 className="text-white text-lg font-bold">{describe}</h2>

            <a className="text-white p-2 rounded font-medium hover:bg-white hover:rounded hover:text-gray-700">
              Saiba mais
            </a>

        </div>
      </div>
    </a>
  </Link>
)

export default function Home() {
  React.useEffect(() => {
    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v10.0'
      })
    };
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },[])
  const handleWhell = e => {
    if(e.deltaY > 0) {
      // console.log('scroll up',e.deltaY)
      e.target.scrollBy(300,0)
    }else {
      // console.log('scroll down',e.deltaY)
      e.target.scrollBy(-300,0)
    }
  }

  return (
    <motion.div
      className="flex flex-col"
      variants={variants}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {/* <!-- Load Facebook SDK for JavaScript --> */}
      <div id="fb-root"></div>
{/*
      <!-- Your Chat Plugin code --> */}
      <div className="fb-customerchat"
        attribution="install_email"
        page_id="503018133206953">
      </div>
    <div className="vh-10 flex flex-row justify-center items-center bg-igo-300 mb-2">
          <Image width={24} height={24} src={'/svg/dental/037-tooth.svg'} />
          <h2 className="md:text-2xl text-xl text-white flex font-extrabold ml-2 flex-row justify-center ">DICAS</h2>
    </div>
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card href={'/articles/limpeza'} describe={'Limpeza dos dentes'} imgSrc={'/especialities/endodontia.jpg'}/>
          <Card href={'/articles/aparelho'} describe={'Importância do aparelho'} imgSrc={'/especialities/ortodontia.jpg'}/>
          <Card href={'/articles/protese'} describe={'Importância das próteses'} imgSrc={'/especialities/protese.jpg'}/>
          {/* <Card href={'/articles/protese'} describe={'Dente quebrou e agora?'} imgSrc={'/especialities/protese.jpg'}/>
          <Card href={'/articles/protese'} describe={'Dentaduras'} imgSrc={'/especialities/protese.jpg'}/>
          <Card href={'/articles/protese'} describe={'Ida do bebê ao dentista'} imgSrc={'/especialities/pediatria.jpg'}/>
          <Card href={'/articles/protese'} describe={'Como manter os dentes saudáveis'} imgSrc={'/especialities/protese.jpg'}/> */}
        </section>
    <div className="vh-10 flex flex-row justify-center items-center bg-igo-300 mb-2">
          <Image width={24} height={24} src={'/svg/dental/007-tooth.svg'} />
          <h2 className="md:text-2xl text-xl text-white flex font-extrabold ml-2 flex-row justify-center ">PRINCIPAIS PROBLEMAS</h2>
    </div>
    <div className="vh-40 flex flex-row justify-center items-center">
      <div
        style={
          {position: "relative",
                height: "60vh",
                width: "100%",
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "middle"}
          }
              >
        <ReactCardCarousel spread={'wide'} autoplay={true} autoplay_speed={3500}>
          <CardProblems>
            <div>
              <h1 className="text-xl font-bold mb-3">Sensibilidade</h1>
              <p className="font-medium">Alimentos ácidos</p>
              <p className="font-medium">Bebidas quentes</p>
              <p className="font-medium">Gelado</p>
              <p className="font-medium">Doces</p>
            </div>
          </CardProblems>
          <CardProblems>
            <div>
              <h1 className="text-xl font-bold mb-3">Bruxismo</h1>
              <p className="font-medium">Alterações de humor</p>
              <p className="font-medium">Estresse</p>
              <p className="font-medium">ansiedade</p>
              <p className="font-medium">Genética</p>
            </div>
          </CardProblems>
          <CardProblems>
            <div>
              <h1 className="text-xl font-bold mb-3">Dentes Tortos</h1>
              <p className="font-medium">Morder objetos</p>
              <p className="font-medium">Respiração</p>
              <p className="font-medium">Bruxismo</p>
              <p className="font-medium">Genética</p>
            </div>
          </CardProblems>
          <CardProblems>
            <div>
              <h1 className="text-xl font-bold mb-3">Cáries</h1>
              <p className="font-medium">Mal uso do fio dental</p>
              <p className="font-medium">Excesso de açucar</p>
              <p className="font-medium">Genética</p>
            </div>
          </CardProblems>
          <CardProblems>
            <div>
              <h1 className="text-xl font-bold mb-3">Mal hálito</h1>
              <p className="font-medium">Problemas de garganta</p>
              <p className="font-medium">Escovação irregular</p>
              <p className="font-medium">Doenças de gengiva</p>
              <p className="font-medium">Falta de fibras</p>
            </div>
          </CardProblems>
        </ReactCardCarousel>
      </div>

    </div>
    <div className="vh-10 flex flex-row justify-center items-center bg-igo-300 mb-2">
          <Image width={24} height={24} src={'/svg/emoctions/021-happy.svg'} />
          <h2 className="md:text-2xl text-xl text-white flex font-extrabold ml-2 flex-row justify-center ">VENHA SORRIR COM A GENTE</h2>
    </div>
    <div className="grid grid-cols-3 grid-row-1 gap-2 mb-2">
      <Image width={'w-1/3'} height={'h-full'} sizes={"responsive"} src={'/clinic/consultorio.jpeg'}/>
      <Image width={'w-1/3'} height={'h-full'} sizes={"responsive"} src={'/clinic/recepcao.jpeg'}/>
      <Image width={'w-1/3'} height={'h-full'} sizes={"responsive"} src={'/clinic/vendas.jpeg'}/>
    </div>
    <div className="vh-10 flex flex-row justify-center items-center bg-igo-300 mb-2">
          <Image width={24} height={24} src={'/svg/redes/007-periscope.svg'} />
          <h2 className="text-xl md:text-2xl sm:text-xl text-white flex font-extrabold ml-2 flex-row justify-center ">NOSSA LOCALIZAÇÃO</h2>
    </div>

    <div className="w-full h-96 mb-2">
         <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAW-BJWiOlMu_uwsn9PEACHqvY6pmrs1hY' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MarkerReactComponent
          lat={-23.486450}
          lng={-46.619251}
          text="Instituto Galindo de Odontologia"
        />
      </GoogleMapReact>
    </div>
    </motion.div>
  )
}
