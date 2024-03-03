import { useSelector } from "react-redux";
import { loginHandle, logoutHandle } from "../utils";

export default function Header() {
  const { user } = useSelector((state) => state.auth);

  const login = (user) => {
    loginHandle(user);
  };

  return (
    <header>
      <h2>Logo</h2>
      {!user && (
        <nav>
          <button
            onClick={() => loginHandle({ id: 1, username: "ayfunerbilen" })}
          >
            tayfunerbilen olarak giriş
          </button>
          <button onClick={() => loginHandle({ id: 2, username: "prototurk" })}>
            prototürk olarak giriş
          </button>
        </nav>
      )}
      {user && (
        <nav>
          Hoşgeldin, {user.username}
          <button onClick={logoutHandle}>Çıkış Yap</button>
        </nav>
      )}
    </header>
  );
}
