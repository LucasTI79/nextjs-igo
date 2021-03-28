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
        <span>Dra Edilene Adorno</span>
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
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={variants}
        className="grid grid-cols-1 md:grid-cols-3"
        >
          <Card
            imgSrc={'/edi.jpg'}
            description={'des'}
            />
          <Card
            imgSrc={'/edi.jpg'}
            description={'des'}
            />
          <Card
            imgSrc={'/edi.jpg'}
            description={'des'}
            />
          <Card
            imgSrc={'/edi.jpg'}
            description={'des'}
            />
          <Card
            imgSrc={'/edi.jpg'}
            description={'des'}
            />
          <Card
            imgSrc={'/edi.jpg'}
            description={'des'}
            />
          <Card
            imgSrc={'/edi.jpg'}
            description={'des'}
            />
          <Card
            imgSrc={'/edi.jpg'}
            description={'des'}
            />
        </motion.div>
      </motion.div>
  )
}

export default Equipe
