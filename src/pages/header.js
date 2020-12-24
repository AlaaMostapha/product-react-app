import Link from "next/link";
import styles from "./header.module.scss";
function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/home">
            <a className={styles.title}>Home</a>
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
        <li>
          <Link href="/ReviewOrder/ReviewOrder">
            <a>review order</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
