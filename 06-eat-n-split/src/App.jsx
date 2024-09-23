import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const navigate = useNavigate();

  const [friends, setFriends] = useState(initialFriends);
  const [visibleAddForm, setVisibleAddForm] = useState(false);

  const [splitBillFriend, setSplitBillFriend] = useState(null);

  function handleAddFriend(e) {
    setFriends((previousArray) => [...previousArray, e]);

    setVisibleAddForm(false);
  }

  function handleSplitBill(selectedFriend) {
    setSplitBillFriend((value) =>
      selectedFriend?.id == value?.id ? null : selectedFriend
    );

    if (visibleAddForm) {
      setVisibleAddForm(false);
    }
  }

  function handleAfterSplitBill(e) {
    const a = friends?.map((friend) => {
      if (friend?.id === e?.id) {
        return { ...friend, balance: friend?.balance + e?.balance };
      } else {
        return friend;
      }
    });

    setFriends(a);

    setSplitBillFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSplitBill={handleSplitBill}
          splitBillFriend={splitBillFriend}
        />

        {visibleAddForm && <FormAddFriend onAddFriend={handleAddFriend} />}

        <button
          className="button"
          onClick={() => setVisibleAddForm((visible) => !visible)}
        >
          {visibleAddForm ? "Close" : "Add Friend"}
        </button>
      </div>

      {splitBillFriend && (
        <FormSplitBill
          friend={splitBillFriend}
          afterSplitBill={handleAfterSplitBill}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, onSplitBill, splitBillFriend }) {
  return (
    <ul>
      {friends?.map((friend) => (
        <Friend
          friend={friend}
          key={friend?.id}
          onSplitBill={onSplitBill}
          splitBillFriend={splitBillFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSplitBill, splitBillFriend }) {
  const selectedFriend = friend?.id === splitBillFriend?.id;

  return (
    <li className={selectedFriend ? "selected" : ""}>
      <img src={friend?.image} alt={friend?.name} />
      <h3>{friend?.name}</h3>
      {friend?.balance < 0 && (
        <p className="red">
          You owe {friend?.name} {friend?.balance}$
        </p>
      )}
      {friend?.balance > 0 && (
        <p className="green">
          {friend?.name} owes you {friend?.balance}$
        </p>
      )}
      {friend?.balance === 0 && <p>You and {friend?.name} are even</p>}

      <Button onClick={() => onSplitBill(friend)}>
        {selectedFriend ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    const newFriend = {
      id: Math.round(Math.random() * 1000),
      name,
      image,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("");
  }

  return (
    <form onSubmit={handleFormSubmit} className="form-add-friend">
      <label>Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Friend Image</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ friend, afterSplitBill }) {
  const [bill, setBill] = useState(0);
  const [userExpense, setUserExpense] = useState(0);
  const friendExpense = bill - userExpense;
  const [billPayer, setBillPayer] = useState("user");

  const newFriend = { ...friend };

  function handleSplitBill(e) {
    e.preventDefault();

    if (billPayer === "user") {
      newFriend.balance = Math.abs(friendExpense);
      afterSplitBill(newFriend);
    }

    if (billPayer === "friend") {
      newFriend.balance = -Math.abs(userExpense);
      afterSplitBill(newFriend);
    }
  }

  return (
    <form className="form-add-friend" onSubmit={handleSplitBill}>
      <h2>Split a bill with {friend?.name}</h2>

      <label>Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e?.target?.value))}
      />

      <label>Your Expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) => {
          if (Number(e?.target?.value) > bill) return;
          setUserExpense(Number(e?.target?.value));
        }}
      />

      <label>{friend?.name}'s Expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>Who is paying the bill</label>
      <select onChange={(e) => setBillPayer(e.target.value)} value={billPayer}>
        <option value="user">You</option>
        <option value="friend">{friend?.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default App;
