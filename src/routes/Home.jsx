import {Searcher,Header,Footer} from "../components/index"

function Home() {

  return <div className='bg-image-2 h-screen flex flex-col justify-between'>
    <Header />
    <Searcher clases={"md:my-10"} />
    <Footer />
  </div>
}

export default Home
