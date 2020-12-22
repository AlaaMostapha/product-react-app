import { useRouter } from "next/router";
import Header from "../../../components/header";
function ProductDetails() {
  const router = useRouter();
  const { id } = router.jquery;
  return (
    <div>
      <Header />
      <h1>product {id}</h1>
    </div>
  );
}

export default ProductDetails;
