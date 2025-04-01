import "./index.css";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="orionwilx"
        name="Wilman Zuleta"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="Caro-ov"
        name="Adrina Olivares"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="orionwilx"
        name="Wilman Zuleta"
      />
    </section>
  );
}

export default App;
// This is a simple React component that renders a heading "Twitter Card" inside a div.
