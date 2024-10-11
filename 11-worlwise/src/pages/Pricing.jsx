import { useSearchParams } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function Pricing() {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log("searchParams", searchParams);

  let a = searchParams.get("name");

  // setSearchParams("name=jklkuj");

  console.log("a", a);

  return (
    <div>
      <PageNav />
      Pricing
    </div>
  );
}
