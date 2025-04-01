import "./index.css";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
function App() {
  const formatUserNamef = (userName) => `@${userName}`;

  const orionwil = {
    initialIsFollowing: false,
    userName: "orionwilx",
    name: "Wilman Zuleta",
  };

  return (
    <section className="App">
      <h2 className="info">A quien quieres seguir ?</h2>
      {/* Pasar props todas al mimos tiempo soponiendo que vienen de un obajeto */}
      <TwitterFollowCard formatUserName={formatUserNamef} {...orionwil} />

      {/* Pasar props de forma individual */}
      <TwitterFollowCard
        formatUserName={formatUserNamef}
        initialIsFollowing
        userName="Caro-ov"
        name="Adrina Olivares"
      />

      {/* Props por default */}
      <TwitterFollowCard
        formatUserName={formatUserNamef}
        initialIsFollowing={false}
      />

      {/* Prop children */}
      {/* <TwitterFollowCard formatUserName={formatUserNamef}>
        <h1>Hola mundo</h1>
      </TwitterFollowCard> */}
    </section>
  );
}

export default App;
// This is a simple React component that renders a heading "Twitter Card" inside a div.
