import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { getMaxListeners } from 'process'
import React from 'react'

const Contato: React.FC = () => {
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [message, setMessage] = React.useState('')

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
  return (
    <motion.div
      className="h-screen flex items-center justify-center"
      style={{backgroundColor:'#edf2f7'}}
      transition={{
        delay: 1
      }}
      variants={variants}
      initial="hidden"
      animate="visible"
      >
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
              Nome Completo
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name" type="text" placeholder="José da Silva" onChange={e => setName(e.target.value)}/>
          </div>
          <div className="md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name" type="mail" placeholder="email@domain.com" onChange={e => setEmail(e.target.value)}/>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-city">
              Celular
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-city" type="tel" placeholder="(xx)xxxxx-xxxx" onChange={e => setPhone(e.target.value)}/>
          </div>
          <div className="md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
              Assunto
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="grid-state"
                onChange={e => setSubject(e.target.value)}
                >
                <option value="Selecionar">Selecionar</option>
                <option value="Consulta">Marcar consulta</option>
                <option value="Informações">Informações</option>
              </select>
            </div>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
              Mensagem
            </label>
            <textarea
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name" placeholder="mensagem" onChange={e => setMessage(e.target.value)}/>
          </div>
        </div>
        <button>
         <a href={`mailto:contato@igodonto.com.br?subject=${subject}&body=${message}`}>
            Enviar mensagem
          </a>
        </button>

      </div>
    </motion.div>
  )
}

export default Contato