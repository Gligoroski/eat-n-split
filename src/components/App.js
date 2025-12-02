import FriendsList from "./FriendsList";
import AddFriend from "./AddFriend";
import SplitBill from "./SplitBill";
import { useState } from "react";

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
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectFriend, setSelectFriend] = useState("");

  function handleSelect(frend) {
    setSelectFriend((cur) => (cur?.id === frend.id ? null : frend));
  }
  function handleSplit(e) {
    e.preventDefault();
    selectFriend.balance += 333;
    setFriends((friends) => [...friends]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelect={handleSelect}
          selectFriend={selectFriend}
          setSelectFriend={setSelectFriend}
        />
        {showAddFriend && <AddFriend setFriends={setFriends} />}
        <button
          className="button"
          onClick={(e) => setShowAddFriend(!showAddFriend)}
        >
          {showAddFriend ? `Close` : `Add Friend`}
        </button>
      </div>
      {selectFriend && (
        <SplitBill
          selectFriend={selectFriend}
          onSplit={handleSplit}
          key={selectFriend.id}
        />
      )}
    </div>
  );
}

export default App;
