import ProductsTable from "./components/ProductsTable/ProductsTable"
import TopBar from "./components/TopBar/TopBar"
import { SearchProvider } from "./context/SearchProvider"

function App() {

  return (
      <SearchProvider>
        <nav className="w-screen h-20 bg-gray-500 mb-1">
          <TopBar />
        </nav>
        <section className="w-screen max-w-5xl h-screen my-0 mx-auto bg-slate-300 border-solid border-slate-600 rounded-lg">
          <ProductsTable />
        </section>
      </SearchProvider>
  )
}

export default App
