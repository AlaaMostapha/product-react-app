import Link from "next/link";

function Header() {
  return (
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
          <Link
            href="/productDetailsNext/[id]"
            as="/productDetails/product-Details"
          >
            <a>product details</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
