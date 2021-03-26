import Link from 'next/link'
import Image from 'next/image'
import { motion, Variants, useCycle } from 'framer-motion'

interface CardProps {
  imgSrc: string,
  description: string
}

const Card: React.FC<CardProps> = ({ imgSrc, description }) => {
  const [animatePresence, cycleCard] = useCycle()
  return (
      <motion.div
        className="mx-10 my-2 h-80 md:h-80 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition"
        variants={variants}
      >
        <motion.img
          className="w-full h-full"
          src={imgSrc}
        />
      </motion.div>
  )
}

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
}


const Equipe: React.FC = () => {
  return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      layoutId={'equipe'}
      >
        <motion.div
        transition={{
          delay: 1
        }}
        variants={variants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          <Card
            imgSrc={'/simone.jpg'}
            description={'des'}
            />
          <Card
            imgSrc={'/simone.jpg'}
            description={'des'}
            />
          <Card
            imgSrc={'/simone.jpg'}
            description={'des'}
            />
          <Card
            imgSrc={'/simone.jpg'}
            description={'des'}
            />
          <Card
            imgSrc={'/simone.jpg'}
            description={'des'}
            />
          <Card
            imgSrc={'/simone.jpg'}
            description={'des'}
            />
          <Card
            imgSrc={'/simone.jpg'}
            description={'des'}
            />
          <Card
            imgSrc={'/simone.jpg'}
            description={'des'}
            />
        </motion.div>
      </motion.div>
  )
}

export default Equipe
