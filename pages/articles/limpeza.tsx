import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Limpeza:React.FC = () => {
  return(
    <motion.div
    className="flex flex-col items-center justify-center mb-2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="vh-10 flex w-full flex-row justify-center items-center bg-igo-300 mb-4">
        <Image width={24} height={24} src={'/svg/dental/006-clean tooth.svg'} />
        <h2 className="md:text-2xl text-xl text-white flex font-extrabold ml-2 flex-row justify-center ">LIMPEZA</h2>
      </div>
      <div

      >
        <h2 className="text-4xl font-medium text-gray-800 mb-2">O que é</h2>
        <p className="text-gray-700 mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <h2 className="text-4xl font-medium text-gray-800 mb-2">Pra que serve</h2>
        <p className="text-gray-700 mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
   </motion.div>
  )
}

export default Limpeza