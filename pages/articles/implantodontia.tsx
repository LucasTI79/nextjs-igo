import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Implantodontia:React.FC = () => {
  return(
    <motion.div
    className="flex flex-col items-center justify-center mb-2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="vh-10 flex w-full flex-row justify-center items-center bg-igo-300 mb-4">
        <Image width={24} height={24} src={'/svg/dental/006-clean tooth.svg'} />
        <h2 className="md:text-2xl text-xl text-white flex font-extrabold ml-2 flex-row justify-center ">IMPLANTODONTIA</h2>
      </div>
      <div

      >
        <h2 className="text-4xl font-medium text-gray-800 mb-2">O que faz</h2>
        <p className="text-gray-700 mb-5">
            Os implantes são estruturas de titânio que são fixadas na estrutura
            óssea dos pacientes. A falta dos dentes podem causas a movimentação
             da arcada dentária e dificultar a função mastigatória do paciente.
             A especialidade de implantodontia é responsável por devolver o sorris
             e utiliza técnicas que possam fazer isso da maneira mais segura possível.
             Não tenha medo de sorrir, venha sorrir com a gente 🙂
        </p>
      </div>
   </motion.div>
  )
}

export default Implantodontia