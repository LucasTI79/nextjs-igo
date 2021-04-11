import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Ortodontia:React.FC = () => {
  return(
    <motion.div
    className="flex flex-col items-center justify-center mb-2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="vh-10 flex w-full flex-row justify-center items-center bg-igo-300 mb-4">
        <Image width={24} height={24} src={'/svg/dental/006-clean tooth.svg'} />
        <h2 className="md:text-2xl text-xl text-white flex font-extrabold ml-2 flex-row justify-center ">ORTODONTIA</h2>
      </div>
      <div

      >
        <h2 className="text-4xl font-medium text-gray-800 mb-2">O que é</h2>
        <p className="text-gray-700 mb-5">
          A especialidade de ortodontia tem como objetivo alinhar
          os dentes e corrigir a mordida. Esses problemas podem
          dificultar a limpeza dos dentes e a função mastigatória
          dos pacientes, podendo assim causar cáries e problemas na ATM.
          Agende uma avaliação para começar o seu tratamento 🙂
        </p>
      </div>
   </motion.div>
  )
}

export default Ortodontia