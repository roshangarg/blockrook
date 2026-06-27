import "../style/UserCard.css"

const UserCard = ({user}) => {
 return (
    <div className="user-card">
        <div className="card-header">
            <div className="profile-section">
                <img className="image" src = {user?.image} alt={user?.firstName}/>
            </div>

        </div>
        <div className="card-body">
                 <h2 className="">
           {user.firstName + user.lastName} 
        </h2>
        <p>
            Age: {user.age}
        </p>
         <p>
            Age: {user.email}
        </p>
        </div>
        
       
    </div>
 )
}
export default UserCard