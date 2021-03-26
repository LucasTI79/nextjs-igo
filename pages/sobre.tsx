import { motion } from 'framer-motion'
import Link from 'next/link'

const Sobre: React.FC = () => {
  return (
    <div className="flex flex-col justifi-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        layoutId={'sobre'}
      >

        <h1>Sobre nós</h1>
      </motion.div>
    </div>
  )
}

export default Sobre
