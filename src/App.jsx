import { Cards } from "./components/cards"
import { Feature } from "./components/feature"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { dataService } from "./data/dataService"
//import { Hero } from "./components/hero"
import { dataShut, dataShutExtra } from "./data/dataShut"
//import { dataInfo } from "./data/dataInfo"

function App() {

  return (
    <>
      <Header />
      {/* <Hero name="cartelera" title={"Cartelera informativa"} data={dataInfo} /> */}
      <Cards data={dataService} />
      <Feature name="horario" title="Horarios del shut"
        image={'https://i.postimg.cc/dQWP9Nb8/shut.png'} data={dataShut} extraData={dataShutExtra} />
      <Footer />
    </>
  )
}

export default App