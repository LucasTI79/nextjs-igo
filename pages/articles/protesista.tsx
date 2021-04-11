import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Protesista:React.FC = () => {
  return(
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="flex vh-10 w-full flex-row justify-center items-center bg-igo-300 mb-4">
        <Image width={24} height={24} src={'/svg/dental/033-enamel.svg'} />
        <h2 className="md:text-2xl text-xl text-white flex font-extrabold ml-2 flex-row justify-center ">PRÓTESE</h2>
      </div>
      <div>
        <h2 className="text-4xl font-medium text-gray-800 mb-2">O que é</h2>
        <p className="text-gray-700 mb-5">
         Seu dente quebrou? A especialidade de protesista entra em ação quando
         a restauração do dente já não é recomendada. As próteses tem o objetivo
         de melhorar a função mastigatória levando em consideração as medidas
         da arcada e cor do dente do paciente. Os materiais são variados, veja
         nosso artigo sobre os tipos de prótese para saber mais!
        </p>
      </div>
    </motion.div>
  )
}

export default Protesista