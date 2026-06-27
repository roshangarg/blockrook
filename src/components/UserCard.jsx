import "../style/UserCard.css";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="card-header">
        <div className="profile-section">
            
          <img src={user?.image} alt={user?.firstName} />
        </div>
      </div>

      <div className="card-body">
        <h2>
          {user.firstName} {user.lastName}
        </h2>

        <p className="age">Age {user.age}</p>

        <span className="email-label">EMAIL</span>

        <p className="email-text">{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;