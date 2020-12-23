import Link from "next/link";
import { Provider } from "react-redux";
import store from "../redux/store/index";

function Header() {
  return (
    <Provider store={store}>
      <div>
        <ul>
          <li>
            <Link href="/home">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/productListNext/productList">
              <a>product list</a>
            </Link>
          </li>
          <li>
            <Link
              href="/productDetailsNext/[id]"
              as="/productDetails/product-Details"
            >
              <a>product details</a>
            </Link>
          </li>
        </ul>
      </div>
    </Provider>
  );
}

export default Header;
