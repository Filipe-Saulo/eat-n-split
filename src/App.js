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

export default function App() {
  return (
    <div className="app">
      <div className="sideBar">
        <FriendsList />
        <Button>Adicionar colega</Button>
        <FormAddFriend />
      </div>

      <FormSplitBill />
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;
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

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🐍tal coleguinha</label>
      <input type="text" />

      <label> 🐍url da img</label>
      <input type="text" />
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
