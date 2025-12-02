import { useState } from "react";

export default function SplitBill({ selectFriend, onSplit }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const friendExpense = bill - yourExpense;

  function split() {
    selectFriend.balance += friendExpense;
  }
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectFriend.name}</h2>
      <label>💰Bill value</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      ></input>
      <label>💰Your expense</label>
      <input
        type="text"
        placeholder="Your expense"
        value={yourExpense}
        onChange={(e) => setYourExpense(+e.target.value)}
      ></input>
      <label>💰{selectFriend.name}'s expense</label>
      <input
        type="text"
        placeholder={`${selectFriend.name} expense`}
        value={friendExpense}
      ></input>
      <label>💰Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectFriend.name}</option>
      </select>
      <button
        className="button"
        onClick={(e) => {
          // onSplit(e);
          split();
        }}
      >
        Split bill
      </button>
    </form>
  );
}
