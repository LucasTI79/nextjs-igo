import Link from "next/link";

interface link {
  href:string,
  id:string
}

// const handleClick = e => {
//   e.preventDefault();
//   setIsActive(!isActive)
//   const mobileMenu = document.getElementById("mobileMenu")
//   mobileMenu.classList.toggle("hidden")
//   mobileMenu.classList.toggle("duration-1000")
//   mobileMenu.classList.toggle("h-auto")
// };

const MyLink:React.FC<link> = ({href, id}) => {
  return(
    <Link href={href}>
      {/* <div onClick={handleClick}>

      </div> */}
    </Link>
  )
}