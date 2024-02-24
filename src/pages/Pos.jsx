import Cart from "../components/Cart"
import MenuBar from "../components/MenuBar"
import Products from "../components/Products"
import Search from "../components/Search"


const Pos = () => {
  return (
    <div className="">
        <div className="grid grid-cols-2">
            <div className="">
                <MenuBar/>
                <Cart/>
            </div>
            <div className="">
                <Search/>
                <Products/>
            </div>
        </div>
    </div>
  )
}

export default Pos