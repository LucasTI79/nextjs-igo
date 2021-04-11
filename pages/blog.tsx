import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  describe?: string,
  imgSrc:string,
  href:string
}

const Card: React.FC<CardProps> = ({ describe, imgSrc, href }) => (
  <Link href={href}>
    <div>
      <a href="">
        <div className="rounded-md border-2 border-white md:border-0 p-3">
          <div className="group relative">
            <img className="h-full w-full rounded-t-lg" src={imgSrc} />
          </div>
          <div className="p-5 rounded-b bg-igo-400">
            <h2 className="text-white text-lg font-bold">{describe}</h2>

              <a className="text-white p-2 rounded font-medium hover:bg-white hover:rounded hover:text-gray-700">
                Saiba mais
              </a>

          </div>
        </div>
      </a>
    </div>
  </Link>
)


const Blog: React.FC = () => {
  return(
    <motion.div
    className="flex flex-col items-center justify-center mb-2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    >

      <div className="vh-10 w-full flex flex-row justify-center items-center bg-igo-300 mb-4">
        <Image width={24} height={24} src={'/svg/noun_Blog_82883.svg'} />
        <h2 className="md:text-2xl text-xl text-white flex font-extrabold ml-2 flex-row justify-center ">Artigos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card href={'/articles/limpeza'} describe={'Limpeza dos dentes'} imgSrc={'/especialities/endodontia.jpg'}/>
          <Card href={'/articles/aparelho'} describe={'Importância do aparelho'} imgSrc={'/especialities/ortodontia.jpg'}/>
          <Card href={'/articles/protese'} describe={'Importância das próteses'} imgSrc={'/especialities/protese.jpg'}/>
      </div>
    </motion.div>
  )
}

export default Blog;