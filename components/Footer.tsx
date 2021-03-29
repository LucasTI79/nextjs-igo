import Image from 'next/image'
import Link from 'next/link';

const Footer:React.FC = () => {
  return(
    <div className="flex flex-row h-30 justify-around items-center pt-5 pb-5 bg-opacity-25 bg-igo-400">
      <div className="">
        <h2 className="text-white font-bold">Atendimento</h2>
        <p className="text-white font-medium flex flex-row">
          <Image src={'/svg/redes/call-white.svg'} width={16} height={16}/>
          <a href="tel:1134594383" target={'_blank'}>
            (11)34594383
          </a>
        </p>
        <p className="text-white font-medium flex flex-row">
         <Image src={'/svg/redes/call-white.svg'} width={16} height={16}/>
          <a href="tel:11940137751" target={'_blank'}>
            (11)940137751
          </a>
        </p>
      </div>

      <div className="hidden md:block grid grid-cols-2 grid-row-1">
        <a className="text-white mr-1">
            <Image width={24} height={24} src={'/svg/redes/chat-white.svg'}/>
        </a>
        <Link href={'/contato'}>
          <a className="text-white font-medium ">Fale conosco</a>
        </Link>
      </div>

      <div>
        <h2 className="text-white font-bold flex flex-row mb-2">Redes sociais</h2>
        <a
          href="https://www.facebook.com/igodonto" target={'_blank'} className="mr-2"
          >
        <Image width={30} height={30} src={'/svg/redes/001-facebook.svg'}/>
        </a>
        <a
          href="https://www.instagram.com/institutogalindoodontologia" target={'_blank'} className="mr-2"
          >
        <Image width={30} height={30} src={'/svg/redes/011-instagram.svg'} className="mr-2"/>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=551134594383&text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida"
          className="mr-2"
          target={'_blank'}
          >
        <Image width={32} height={32} src={'/svg/redes/003-whatsapp.svg'} />
        </a>
      </div>
    </div>
  )
}

export default Footer;