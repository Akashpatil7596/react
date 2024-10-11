import { useSearchParams } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function PageNotFound() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <PageNav />
      Page Not Found
    </div>
  );
}
