import Friend from "./Friend";
export default function FriendsList({
  friends,
  onSelect,
  selectFriend,
  setSelectFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelect={onSelect}
          selectFriend={selectFriend}
          setSelectFriend={setSelectFriend}
        />
      ))}
    </ul>
  );
}
