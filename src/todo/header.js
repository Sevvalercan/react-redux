import React from "react";

export default function Header({ user, setUser }) {
  const loginHandle = (user) => {
    setUser(user);
  };

  const logoutHandle = () => {
    setUser(false);
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
