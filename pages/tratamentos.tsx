import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  especiality: string,
  imgSrc:string,
  article:string
}

const Card: React.FC<CardProps> = ({ especiality, imgSrc, article }) => (
  <Link href={article}>
    <div className="rounded-md border-2 border-black md:border-0 p-3 cursor-pointer">
      <div className="group relative">
        <img className="h-full w-full rounded-t-lg" src={imgSrc} />
      </div>
      <div className="p-5 rounded-b bg-igo-400">
        <h2 className="text-white font-bold text-lg">{especiality}</h2>
      </div>
    </div>
  </Link>
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

        <div className="vh-10 md:vh-15 flex flex-row justify-center items-center bg-igo-300 mb-2">
            <Image width={24} height={24} src={'/svg/dental/040-dentist-chair.svg'} />
            <h2 className="text-cl md:text-2xl sm:text-xl text-white flex font-extrabold ml-2 flex-row justify-center ">TRATAMENTOS</h2>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card especiality={'Endodontia'} article="/articles/endodontia" imgSrc={'/especialities/endodontia.jpg'}/>
          <Card especiality={'Periodontia'} article="/articles/periodontia" imgSrc={'/especialities/periodontia.jpg'}/>
          <Card especiality={'ATM'} article="/articles/atm" imgSrc={'/especialities/dtm.jpg'}/>
          <Card especiality={'Ortodontia'} article="/articles/ortodontia" imgSrc={'/especialities/ortodontia.jpg'}/>
          <Card especiality={'Implantes'} article="/articles/implantodontia" imgSrc={'/especialities/implante.jpg'}/>
          <Card especiality={'Odontopediatria'} article="/articles/odontopediatria" imgSrc={'/especialities/pediatria.jpg'}/>
          <Card especiality={'Prótese'} article="/articles/protesista" imgSrc={'/especialities/protese.jpg'}/>
          <Card especiality={'Dentistica'} article="/articles/dentistica" imgSrc={'/especialities/dentistica.jpg'}/>
        </section>
        </motion.div>
    </div>
  )
}

export default Tratamentos
