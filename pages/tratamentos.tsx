import { motion } from 'framer-motion'
import Image from 'next/image'

interface CardProps {
  especiality: string,
  imgSrc:string
}

const Card: React.FC<CardProps> = ({ especiality, imgSrc }) => (
  <div className="rounded p-3 my-2">
    <div className="group relative">
      <img className="h-full w-full rounded-t" src={imgSrc} />
    </div>
    <div className="p-5 rounded-b" style={{backgroundColor:'#77cec3'}}>
      <h2 className="text-white text-lg">{especiality}</h2>
    </div>
  </div>
)

const Tratamentos: React.FC = () => {
  return (
    <div className="flex flex-col justifi-center items-center">
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        layoutId={'tratamentos'}
        >

        <h1 className="flex flex-row justify-center mb-5 text-2xl">Tratamentos</h1>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card especiality={'Endodontia'} imgSrc={'/endodontia.jpg'}/>
          <Card especiality={'Periodontia'} imgSrc={'/periodontia.jpg'}/>
          <Card especiality={'DTM'} imgSrc={'/dtm.jpg'}/>
          <Card especiality={'Ortodontia'} imgSrc={'/ortodontia.jpg'}/>
          <Card especiality={'Implantes'} imgSrc={'/implante.jpg'}/>
          <Card especiality={'Odontopediatria'} imgSrc={'/pediatria.jpg'}/>
          <Card especiality={'Prótese'} imgSrc={'/protese.jpg'}/>
          <Card especiality={'Dentistica'} imgSrc={'/dentistica.jpg'}/>
        </section>
        </motion.div>
    </div>
  )
}

export default Tratamentos
