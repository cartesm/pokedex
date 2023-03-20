import { useEffect } from "react"
import {Searcher,Header,Footer,ListContainer} from "../components/index"
useEffect
function Home() {

  useEffect(() => {
    document.title="Simple pokedex";
  }, [])
  

  return <div className='bg-[#696e79] h-screen flex flex-col justify-between'>
    <Header />
    <Searcher clases={"md:my-10"} />
    <ListContainer/>
    <Footer />
  </div>
}

export default Home
