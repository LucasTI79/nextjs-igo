import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const BucoMaxilo:React.FC = () => {
  return(
    <motion.div
    className="flex flex-col items-center justify-center mb-2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="vh-10 flex w-full flex-row justify-center items-center bg-igo-300 mb-4">
        <Image width={24} height={24} src={'/svg/dental/006-clean tooth.svg'} />
        <h2 className="md:text-2xl text-xl text-white flex font-extrabold ml-2 flex-row justify-center ">BUCOMAXILO</h2>
      </div>
      <div

      >
        <p className="text-gray-700 mb-5">
        Essa especialidade é responsável por cuidar de traumas na face do paciente,
        além de realizar cirurgias para corrigir o mal desenvolvimento da estrutura óssea facial
        </p>
      </div>
   </motion.div>
  )
}

export default BucoMaxilo