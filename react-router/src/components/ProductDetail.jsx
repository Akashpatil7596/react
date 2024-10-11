import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { ClipLoader, DotLoader } from "react-spinners";
import { toast } from "react-toastify";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function ProductDetail() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState({});
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${params?.id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      });
  }, []);

  return (
    <>
      {loading ? (
        <DotLoader
          color={"#ffffff"}
          loading={true}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <p>{products.id}</p>
          <p>{products.title}</p>
          <p>{products.price}</p>
        </>
      )}
    </>
  );
}
