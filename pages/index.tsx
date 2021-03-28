import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import GoogleMapReact from 'google-map-react';
import ReactCardCarousel from "react-card-carousel";
interface CardProps {
  href: string
  imgSrc: string
  layoutId: string
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
    background: "#52C0F5",
    color: "#FFF",
    fontFamily: "sans-serif",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "10px",
    boxSizing: "border-box"
}

interface Marker {
  text: string,
  lat: number,
  lng: number
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

const AnyReactComponent: React.FC<Marker> = ({ lat, lng, text }) => (
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
              href="https://maps.google.com/maps?ll=-23.486136,-46.619019&amp;z=17&amp;t=m&amp;hl=pt-BR&amp;gl=US&amp;mapclient=apiv3&amp;cid=15563642099758796458">
              <span>Visualize no Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function Home() {
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
   <h2 className="text-xl flex flex-row justify-center mb-5">Endereço</h2>
    <div className="w-full h-96 md:h-38 mb-5">
         <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAW-BJWiOlMu_uwsn9PEACHqvY6pmrs1hY' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        className=""
      >
        <AnyReactComponent
          lat={-23.486450}
          lng={-46.619251}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    <h2 className="flex flex-row justify-center text-xl ">Venha sorrir com a gente</h2>
    <div id="items-wrapper" className="w-full vh-30">
      <div className="flex flex-row justify-around">
      </div>
      <div
        id="items"
        className="flex flex-row overflow-x-hidden"
        >
        <div className="item flex-none w-1/3 h-full object-cover scroll-snap-align-start pointer-events-none"><img className="w-full h-full" src="https://unsplash.it/1600/400?image=950"/></div>
        <div className="item flex-none w-1/3 h-full object-cover scroll-snap-align-start pointer-events-none"><img className="w-full h-full" src="https://unsplash.it/1600/400?image=950"/></div>
        <div className="item flex-none w-1/3 h-full object-cover scroll-snap-align-start pointer-events-none"><img className="w-full h-full" src="https://unsplash.it/1600/400?image=950"/></div>
      </div>
    </div>
    <div>
      <div style={CONTAINER_STYLE}>
        <ReactCardCarousel spread={'wide'} autoplay={true} autoplay_speed={2500}>
          <div style={CARD_STYLE}>First Card</div>
          <div style={CARD_STYLE}>Second Card</div>
          <div style={CARD_STYLE}>Third Card</div>
          <div style={CARD_STYLE}>Fourth Card</div>
          <div style={CARD_STYLE}>Fifth Card</div>
        </ReactCardCarousel>
      </div>
    </div>

    </motion.div>
  )
}
