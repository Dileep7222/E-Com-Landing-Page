import "./App.css"
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import ProductList from "./components/Productlist";
import Data from "./data.json"

function App() {
  
  return (
    <>
      <header>
      <Navbar />
      <Banner/>
      </header>
      <main>
        <Categories />
        <ProductList heading="Top Deals Now" products={Data.deals} />
        <ProductList heading="All Products" products={Data.allProducts} />
      </main>
    </>
  )
}

export default App
