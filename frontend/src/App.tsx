import { SearchProvider } from "./context/SearchProvider"
import HomePage from "./pages/HomePage/HomePage"

function App() {
  return (
    <SearchProvider>
        <HomePage />
    </SearchProvider>
  )
}

export default App
