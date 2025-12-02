export default function Friend({
  friend,
  onSelect,
  selectFriend,
  setSelectFriend,
}) {
  const isSelected = selectFriend?.id === friend.id;
  return (
    <li>
      <img src={friend.image} alt="img"></img>
      <h3>{friend.name}</h3>
      <p>
        You owe {friend.name} {friend.balance} 💲
      </p>
      <button className="button" onClick={(e) => onSelect(friend)}>
        {isSelected ? `Close` : `Select`}
      </button>
    </li>
  );
}
