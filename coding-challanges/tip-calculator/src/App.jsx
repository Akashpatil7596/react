import { useState } from "react";
import Bill from "./components/bill/Bill";
import Service from "./components/service/Service";
import Reset from "./components/reset/Reset";

function App() {
  const [bill, setBill] = useState(0);
  const [myServiceCharge, setMyServiceCharge] = useState(0);
  const [friendServiceCharge, setFriendServiceCharge] = useState(0);

  function handleBillChange(value) {
    setBill(value);
  }

  function handleMyServiceCharge(serviceCharge) {
    setMyServiceCharge(serviceCharge);
  }

  function handleFriendServiceCharge(serviceCharge) {
    setFriendServiceCharge(serviceCharge);
  }

  function handleReset() {
    setBill(0);
    setMyServiceCharge(0);
    setFriendServiceCharge(0);
  }

  return (
    <div>
      <Bill onBillCharge={handleBillChange} bill={bill} />
      <Service
        onSelectServiceCharge={handleMyServiceCharge}
        text="How did you like the service?"
        serviceCharge={myServiceCharge}
      />
      <Service
        onSelectServiceCharge={handleFriendServiceCharge}
        text="How did your friend like the service"
        serviceCharge={friendServiceCharge}
      />

      <h1>
        You Pay {bill} + Service + {myServiceCharge} + FriendService +{" "}
        {friendServiceCharge}
      </h1>

      <Reset onReset={handleReset} />
    </div>
  );
}

export default App;
