import { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [num, setNum] = useState(0);
  const [visible, setVisible] = useState(true);

  const [inputMessage, setInputMessage] = useState("");

  function onIncrement() {
    if (num >= 2) {
      return;
    }

    setNum((value) => value + 1);
  }

  function onDecrement() {
    if (num <= 0) {
      return;
    }
    setNum((value) => value - 1);
  }

  return (
    <>
      <button className="close" onClick={() => setVisible(!visible)}>
        {visible ? (
          <i className="bi bi-x-square-fill"></i>
        ) : (
          <i className="bi bi-opencollective"></i>
        )}
      </button>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) =>
          inputMessage?.length <= 10 && setInputMessage(() => e.target.value)
        }
      />
      {inputMessage?.length <= 10 ? inputMessage : null}
      {visible && (
        <div className="steps">
          <div className="numbers">
            <div className={num >= 0 ? "active" : undefined}>1</div>
            <div className={num >= 1 ? "active" : undefined}>2</div>
            <div className={num >= 2 ? "active" : undefined}>3</div>
          </div>

          <Message messageText={messages[num]}>Step: {num + 1}</Message>

          <div className="buttons">
            <Button
              bgColor={"#7950f2"}
              textColor={"#fff"}
              onClick={onDecrement}
            >
              <span>👈</span>
              Previous
            </Button>
            <Button
              bgColor={"#7950f2"}
              textColor={"#fff"}
              onClick={onIncrement}
            >
              Next
              <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Message({ messageText, children }) {
  return (
    <p className="message">
      {children} {messageText}
    </p>
  );
}

export default App;
