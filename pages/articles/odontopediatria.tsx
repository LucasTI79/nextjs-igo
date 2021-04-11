import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Odontopediatria:React.FC = () => {
  return(
    <motion.div
    className="flex flex-col items-center justify-center mb-2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="vh-10 flex w-full flex-row justify-center items-center bg-igo-300 mb-4">
        <Image width={24} height={24} src={'/svg/dental/006-clean tooth.svg'} />
        <h2 className="md:text-2xl text-xl text-white flex font-extrabold ml-2 flex-row justify-center ">ODONTOPEDIATRIA</h2>
      </div>
      <div

      >
        <h2 className="text-4xl font-medium text-gray-800 mb-2">O que é</h2>
        <p className="text-gray-700 mb-5">
          Ensinar a criança desde pequena como é importante a limpeza dos
          dentes e como fazer isso é um grande desafio para os pais, a
          odontopediatra tem as técnicas educativas necessárias para ensinar
          e orientar tanto as crianças como os pais de como cuidar dos dentes 🙂

        </p>
      </div>
   </motion.div>
  )
}

export default Odontopediatria