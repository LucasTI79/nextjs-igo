import React from 'react'
import Image from 'next/image'

const Aparelho:React.FC = () => {
  return(
    <div className="vh-10 flex flex-row justify-center items-center bg-igo-400 mb-2">
      <Image width={24} height={24} src={'/svg/emoctions/021-happy.svg'} />
    <h2 className="md:text-2xl text-xl text-white flex font-extrabold ml-2 flex-row justify-center ">Aparelho</h2>
</div>
  )
}

export default Aparelho