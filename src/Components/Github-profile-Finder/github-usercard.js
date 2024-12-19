export function Usercard({ user }) {
  const {
    avatar_url,
    html_url,
    created_at,
    login,
    name,
    followers,
    following,
    public_repos,
  } = user;

  const createdDate = new Date(created_at);
  return (
    <div className="user-card">
      <div>
        <img src={avatar_url} className="avatar" alt="user" />
      </div>
      <div className="user-profile">
            <a href={`${html_url}`}>{name || login}</a>
            <p>
                User Joined On {"  "}
                {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
                    month: "short",
                })} ${createdDate.getFullYear()} `}
            </p>
      </div>
      <div className="user-details">
        <p>Public Repositories :</p>
        <p>{public_repos}</p>
      </div>
      <div  className="user-details">
        <p>Followers :</p>
        <p>{followers}</p>
      </div>
      <div  className="user-details">
        <p>Following :</p>
        <p>{following}</p>
      </div>
    </div>
  );
}
