import { useState } from "react";

export default function AddFriend({ setFriends }) {
  const [newFriendName, setNewFriendName] = useState("");
  const [newFriendUrl, setNewFriendUrl] = useState(
    "https://i.pravatar.cc/48?u=118836"
  );

  const friend = {
    id: Date.now(),
    name: newFriendName,
    image: newFriendUrl,
    balance: 0,
  };

  function handleAddFriend(e) {
    e.preventDefault();
    setFriends((friends) => [...friends, friend]);
    setNewFriendName("");
    setNewFriendUrl("https://i.pravatar.cc/48?u=118836");
  }

  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑Friend name</label>
      <input
        type="text"
        placeholder="Friend name"
        value={newFriendName}
        onChange={(e) => setNewFriendName(e.target.value)}
      ></input>
      <label>🖼️Image URL</label>
      <input
        type="text"
        placeholder="URL"
        value={newFriendUrl}
        onChange={(e) => setNewFriendUrl(e.target.value)}
      ></input>
      <button className="button" onClick={(e) => handleAddFriend(e)}>
        Add
      </button>
    </form>
  );
}
