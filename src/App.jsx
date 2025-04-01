import "./index.css";
import "./App.css";

function App() {
  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img
          src="https://github.com/orionwilx.png"
          alt="Imagen de perfil"
          className="tw-follow-card-avatar"
        />
        <div className="tw-follow-card-info">
          <strong>Wilman Zuleta</strong>
          <span className="tw-follow-card-infoUserName">@Orionwilx</span>
        </div>
      </header>

      <aside>
        <button className="tw-follow-card-button">Seguir</button>
      </aside>
    </article>
  );
}

export default App;
// This is a simple React component that renders a heading "Twitter Card" inside a div.
