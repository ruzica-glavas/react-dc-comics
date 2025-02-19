import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

const links=[
  {id: 1, text: "Characters", url: '#'},
  {id: 2, text: "Comics", url: '#'},
  {id: 3, text: "Movies", url: '#'},
  {id: 4, text: "TV", url: '#'},
  {id: 5, text: "Games", url: '#'},
  {id: 6, text: "Collectibles", url: '#'},
  {id: 7, text: "Videos", url: '#'},
  {id: 8, text: "Fans", url: '#'},
  {id: 9, text: "News", url: '#'},
  {id: 10, text: "Shop", url: '#'},
]


function App() {
    return (
      <>
        <Header links = {links}/>
        <Main />
        <Footer />
      </>
    )
  }

export default App
