import { motion } from 'framer-motion'
import Image from 'next/image'
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

    <div className="vh-10 flex flex-row justify-center items-center bg-igo-300 mb-5">
      <Image width={24} height={24} src={'/svg/status/icons8-informações.svg'} />
      <h2 className="text-xl md:text-2xl sm:text-xl text-white flex font-extrabold ml-2 flex-row justify-center ">SOBRE NÓS</h2>
    </div>
        <h2 className="text-xl md:text-3xl pl-5 font-sans font-bold text-gray-700 mb-2">BEM VINDOS A IGO </h2>
        <p className="font-sans pl-5 text-base md:text-xl text-gray-700 mb-5">
            Somos uma clínica odontológica que busca atender não se importando com a classe social, sempre colocando os pacientes em primeiro lugar!
            <br/> <br/>
            Temos <Link href="/equipe"><a className="font-bold">profissionais</a></Link> da melhor qualidade e que se preocupam sempre em tirar os melhores sorrisos 🙂
            <br/> <br/>
            Atendemos todas as <Link href="/tratamentos"><a className="font-bold">especialidades</a></Link> e sempre orientando o melhor para o paciente e esclarecendo todas as dúvidas, não precisa mais ter medo de ir ao dentista!
        </p>

      <div className="vh-10 flex flex-row justify-center items-center bg-igo-300 mb-2">
        <Image width={24} height={24} src={'/svg/emoctions/021-happy.svg'} />
        <h2 className="md:text-2xl text-xl text-white flex font-extrabold ml-2 flex-row justify-center ">VENHA SORRIR COM A GENTE</h2>
      </div>

      <div className="grid grid-cols-3 grid-row-1 gap-2 mb-2">
        <Image width={'w-1/3'} height={'h-full'} sizes={"responsive"} src={'/clinic/consultorio.jpeg'}/>
        <Image width={'w-1/3'} height={'h-full'} sizes={"responsive"} src={'/clinic/recepcao.jpeg'}/>
        <Image width={'w-1/3'} height={'h-full'} sizes={"responsive"} src={'/clinic/vendas.jpeg'}/>
      </div>
      </motion.div>
    </div>
  )
}

export default Sobre
