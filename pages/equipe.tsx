import Link from 'next/link'
import Image from 'next/image'
import { motion, Variants, useCycle, animate } from 'framer-motion'

interface CardProps {
  imgSrc: string,
  description: string
}

const Card: React.FC<CardProps> = ({ imgSrc, description }) => {
  const [animate, cycleCard] = useCycle({scale: 1.0},{scale:1.2})
  return (
      <motion.div
      className="mx-8 my-2 h-120 sm:h-100 rounded-xl cursor-pointer hover:bg-gray-50 transition"
      //variants={variants}
    >

      <motion.img
        className="w-full h-4/5 sm:h-4/5 rounded-t-xl"
        src={imgSrc}
      />

      <div className="flex h-1/5 sm:h-1/5 justify-center  hover:h-2/5 items-center border-transparent">
        <span>{description}</span>
      </div>

    </motion.div>
  )
}

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
}


const Equipe: React.FC = () => {
  return (
      <motion.div
      className=""
      layoutId={'equipe'}
      >
      <div className="vh-10 flex flex-row justify-center items-center bg-igo-300 mb-2">
        <Image width={24} height={24} src={'/svg/dental/008-dentist.svg'} />
        <h2 className="text-2xl sm:text-xl text-white flex font-extrabold ml-2 flex-row justify-center ">EQUIPE</h2>
      </div>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={variants}
        className="grid grid-cols-1 md:grid-cols-3"
        >
          <Card
            imgSrc={'/doctor/Carol.jpg'}
            description={'Dra Carolina Calais'}
            />
          <Card
            imgSrc={'/doctor/Dani.jpg'}
            description={'Dra Danielle Matias'}
            />
          <Card
            imgSrc={'/doctor/edi.jpg'}
            description={'Dra Edilene Adorno'}
            />
          <Card
            imgSrc={'/doctor/Fran.jpg'}
            description={'Dra Francine Brito'}
            />
          <Card
            imgSrc={'/doctor/Lud.jpg'}
            description={'Dra Ludmila Koslovsky'}
            />
          <Card
            imgSrc={'/doctor/Monique.jpg'}
            description={'Dra Monique Dias'}
            />
          <Card
            imgSrc={'/doctor/murilo.jpg'}
            description={'Dra Murilo Francisco'}
            />
          <Card
            imgSrc={'/doctor/Rita.jpg'}
            description={'Dra Rita de Cássia'}
            />
          <Card
            imgSrc={'/doctor/Rodolfo.jpg'}
            description={'Dra Rodolfo Thomé'}
            />
          <Card
            imgSrc={'/doctor/Simone.jpg'}
            description={'Simone Falkenburg'}
            />
          <Card
            imgSrc={'/doctor/Tatiana.jpg'}
            description={'Dra Tatiana Galindo'}
          />
          <Card
            imgSrc={'/doctor/Tatiane.jpg'}
            description={'Dra Tatiane Guedes'}
          />
        </motion.div>
      </motion.div>
  )
}

export default Equipe
