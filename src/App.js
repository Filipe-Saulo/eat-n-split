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

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function ShowFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sideBar">
        <FriendsList friends={friends} />
        <Button onClick={() => ShowFriend()}>
          {showAddFriend ? "fehca" : "Adicionar colega"}
        </Button>
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
      </div>

      <FormSplitBill />
    </div>
  );
}

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          devo a {friend.name}, {Math.abs(friend.balance)} pila, ovo ve e t falo
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          a {friend.name}, me deve {Math.abs(friend.balance)} pila, caloteira
        </p>
      )}
      {friend.balance === 0 && <p>eu e {friend.name} tamo quites</p>}
      <Button children> selecionar</Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    console.log(newFriend);

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🐍tal coleguinha</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label> 🐍url da img</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>dividi a conta com X</h2>
      <label> 🐍valor da conta</label>
      <input type="text" />
      <label> 🐍minha despesa</label>
      <input type="text" />
      <label> 😒despesa</label>
      <input type="text" disabled />
      <label>☠ quem vai pagar a conta</label>
      <select>
        <option value="user">eu</option>
        <option value="friend">x</option>
      </select>
      <Button>dividir conta</Button>
    </form>
  );
}
