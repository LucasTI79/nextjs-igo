import Header from './Header'
import Footer from './Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col justify-between mx-auto overflow-y-hidden max-w-5xl px-4 sm:px-6 md:px-8">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
