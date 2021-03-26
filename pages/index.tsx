import Link from 'next/link'
import { motion, Variants } from 'framer-motion'

interface CardProps {
  href: string
  imgSrc: string
  layoutId: string
}

const Card: React.FC<CardProps> = ({ href, imgSrc, layoutId }) => {
  return (
    <Link href={href}>
      <motion.div
        className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition"
        variants={variants}
      >
        <motion.img
          src={imgSrc}
          className="w-full h-full"
          layoutId={layoutId}
        />
      </motion.div>
    </Link>
  )
}

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

export default function Home() {
  return (
    <div>
      <motion.h1
        className="text-4xl mt-10 leading-none font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl md:mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Construa sites modernos com agilidade sem precisar sair do HTML.
      </motion.h1>

      <motion.div
        className="w-full grid grid-cols-1 grid-rows-3 gap-4 mt-10 md:grid-cols-3 md:grid-rows-1 md:mt-24"
        transition={{
          delay: 1
        }}
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <Card
          href={'/tratamento'}
          imgSrc={'/img/nextjs.svg'}
          layoutId={'tratamento'}
        />
        <Card
          href={'/equipe'}
          imgSrc={'/img/tailwind.svg'}
          layoutId={'equipe'}
        />
        <Card
          href={'/sobre'}
          imgSrc={'/img/framermotion.svg'}
          layoutId={'sobre'}
        />
      </motion.div>
    </div>
  )
}
