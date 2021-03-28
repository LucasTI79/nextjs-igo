import Image from 'next/image'
import Link from 'next/link';

const Footer:React.FC = () => {
  return(
    <div className="flex flex-row h-30 justify-around items-center pt-5 pb-5 bg-opacity-25" style={{backgroundColor:'#006064'}}>
      <div className="">
        <h2 className="text-white font-medium">Atendimento</h2>
        <p className="text-white font-medium flex flex-row">
          <Image src={'/call-white.svg'} width={16} height={16}/>
          (11)34594383
        </p>
        <p className="text-white font-medium flex flex-row">
         <Image src={'/call-white.svg'} width={16} height={16}/>
          (11)940137751
        </p>
      </div>

      <div className="visible">
        <Link href={'/contato'}>
        <a className="text-white">Fale conosco</a>
        </Link>
      </div>

      <div>
        <h2 className="text-white font-medium flex flex-row mb-2">Redes sociais</h2>
        <a
          href="https://www.facebook.com/igodonto" className="mr-2"
          >
        <Image width={30} height={30} src={'/001-facebook.svg'}/>
        </a>
        <a
          href="https://www.instagram.com/institutogalindoodontologia" className="mr-2"
          >
        <Image width={30} height={30} src={'/011-instagram.svg'} className="mr-2"/>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=551134594383&text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida"
          className="mr-2"
          >
        <Image width={30} height={30} src={'/011-instagram.svg'} />
        </a>
      </div>
    </div>
  )
}

export default Footer;