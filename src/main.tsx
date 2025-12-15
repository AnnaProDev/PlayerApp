import { createRoot } from "react-dom/client"
import "./index.css"
import { Header } from "./components/Header"
import { PageTitle } from "./components/PageTitle"
import { Footer } from "./components/Footer"
import { TrackList } from "./components/TrackList"
import { TrackDetail } from "./components/TrackDetail"
 
const rootEl = document.getElementById("root")
const reactRoot = createRoot(rootEl!)
reactRoot.render(<MainPage />)

/*...*/
 
createRoot(document.getElementById("root")!).render(<MainPage />)
 
function MainPage() {
  return (
    <div>
      <Header />
      <PageTitle />
      <div style={{ display: "flex", gap: "30px" }}>
			<TrackList />
			<TrackDetail />
      </div>
      <Footer />
    </div>
  )
}
