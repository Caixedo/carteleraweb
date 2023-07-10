import { Feature } from "./components/feature"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Hero } from "./components/hero"
import Shut from "./assets/shut.png"
import { dataShut, dataShutExtra } from "./data/dataShut"
import { dataInfo } from "./data/dataInfo"

function App() {

  return (
    <>
      <Header />
      <Hero name="cartelera" title={"Cartelera informativa"} data={dataInfo} />
      <Feature name="horario" title="Horarios del shut"
        image={Shut} data={dataShut} extraData={dataShutExtra} />
      <Footer />
    </>
  )
}

export default App