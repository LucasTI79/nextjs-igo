import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Periodontia:React.FC = () => {
  return(
    <motion.div
    className="flex flex-col items-center justify-center mb-2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="vh-10 flex w-full flex-row justify-center items-center bg-igo-300 mb-4">
        <Image width={24} height={24} src={'/svg/dental/006-clean tooth.svg'} />
        <h2 className="md:text-2xl text-xl text-white flex font-extrabold ml-2 flex-row justify-center ">PERIODONTIA</h2>
      </div>
      <div

      >
        <h2 className="text-4xl font-medium text-gray-800 mb-2">O que é</h2>
        <p className="text-gray-700 mb-5">
          Essa especialidade é responsável por
          fazer o controle quando o paciente tem problemas na gengiva,
          algumas dessas que podem causar mobilidade dentária. O profissional
          utiliza ferramentas apropriadas que possam fazer a limpeza abaixo dela
          afim de tratar o que não pode ver a olho nu. Caso queira saber mais sobre
          doenças periodontais leia nosso artigo sobre o assunto 🙂
        </p>
      </div>
   </motion.div>
  )
}

export default Periodontia