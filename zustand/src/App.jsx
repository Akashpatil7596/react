import { useEffect } from "react";
import "./App.css";
import { useCounterStore } from "./store";

function App() {
  const count = useCounterStore((state) => state.count);
  const data = useCounterStore((state) => state.data);

  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const fetchData = useCounterStore((state) => state.fetchData);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function nextPage() {
    fetchData(10);
  }

  return (
    <>
      <h1>Hello World</h1>
      {count}
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
      <button onClick={nextPage}>next</button>
      {data?.length &&
        data?.map((element) => (
          <>
            <h1>{element.id}</h1>
            <p>{element.title}</p>
          </>
        ))}
    </>
  );
}

export default App;
