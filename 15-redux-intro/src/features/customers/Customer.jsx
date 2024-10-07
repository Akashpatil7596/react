import { useSelector } from "react-redux";

function Customer() {
  const { fullName } = useSelector((state) => state.customerReducer);

  return (
    <>{fullName ? <h2>👋 Welcome, {fullName}</h2> : <h2>👋 Welcome</h2>}</>
  );
}

export default Customer;
