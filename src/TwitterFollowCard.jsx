export function TwitterFollowCard({
  name,
  userName,
  isFollowing,
  formatUserName,
}) {
  console.log(isFollowing);
  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img
          src={`https://github.com/${userName}.png`}
          alt="Imagen de perfil"
          className="tw-follow-card-avatar"
        />
        <div className="tw-follow-card-info">
          <strong>{name}</strong>
          <span className="tw-follow-card-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <button className="tw-follow-card-button">Seguir</button>
      </aside>
    </article>
  );
}
