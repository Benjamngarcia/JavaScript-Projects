import { Footer } from "../components/General/Footer"
import {Header} from "../components/General/Header"

const BasicLayout = (props) => {
  const { children } = props

  return (
    <>
      <Header/>
      { children }
      <Footer/>
    </>
  )
}

export default BasicLayout