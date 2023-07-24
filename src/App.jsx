import { Cards } from "./components/cards"
import { CardAdmin } from "./components/cards/cardAdmin"
import { Feature } from "./components/feature"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { dataPayAdmin } from "./data/dataPayAdmin"
import { dataService } from "./data/dataService"
import { dataShut, dataShutExtra } from "./data/dataShut"
//import { Hero } from "./components/hero"
//import { dataInfo } from "./data/dataInfo"

function App() {

  return (
    <>
      <Header />
      {/* <Hero name="cartelera" title={"Cartelera informativa"} data={dataInfo} /> */}
      <Cards data={dataService} />
      <CardAdmin data={dataPayAdmin} />
      <Feature name="horario" title="Horarios del shut"
        image={'https://i.postimg.cc/dQWP9Nb8/shut.png'} data={dataShut} extraData={dataShutExtra} />
      <Footer />
    </>
  )
}

export default App