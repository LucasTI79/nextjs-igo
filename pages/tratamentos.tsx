import { motion } from 'framer-motion'
import Image from 'next/image'

interface CardProps {
  especiality: string,
  imgSrc:string
}

const Card: React.FC<CardProps> = ({ especiality, imgSrc }) => (
  <div className="rounded-md border-2 border-white md:border-0 p-3">
    <div className="group relative">
      <img className="h-full w-full rounded-t-lg" src={imgSrc} />
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

        <div className="vh-10 md:vh-15 flex flex-row justify-center items-center bg-igo-400 mb-2">
            <Image width={24} height={24} src={'/svg/dental/040-dentist-chair.svg'} />
            <h2 className="text-cl md:text-2xl sm:text-xl text-white flex font-extrabold ml-2 flex-row justify-center ">TRATAMENTOS</h2>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card especiality={'Endodontia'} imgSrc={'/especialities/endodontia.jpg'}/>
          <Card especiality={'Periodontia'} imgSrc={'/especialities/periodontia.jpg'}/>
          <Card especiality={'DTM'} imgSrc={'/especialities/dtm.jpg'}/>
          <Card especiality={'Ortodontia'} imgSrc={'/especialities/ortodontia.jpg'}/>
          <Card especiality={'Implantes'} imgSrc={'/especialities/implante.jpg'}/>
          <Card especiality={'Odontopediatria'} imgSrc={'/especialities/pediatria.jpg'}/>
          <Card especiality={'Prótese'} imgSrc={'/especialities/protese.jpg'}/>
          <Card especiality={'Dentistica'} imgSrc={'/especialities/dentistica.jpg'}/>
        </section>
        </motion.div>
    </div>
  )
}

export default Tratamentos
