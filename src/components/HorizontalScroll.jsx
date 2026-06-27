import {useState, useRef,useEffect} from "react"
import {getUsers} from "../api/getUsers"
import UserCard from "../components/UserCard.jsx"
import "../style/ScrollCss.css"

const HorizontalScroll = () => {
    const [users , setUsers] = useState([]);
    const [skip, setSkip] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore , setHasMore] = useState(true);
    const scrollReference = useRef(null);
    useEffect(() => {
        fetchUsers(0)
    },[])
    const fetchUsers = async(cSkip) => {
        if(loading || !hasMore)  return ;
        try {
            setLoading(true);
            const userResponse = await getUsers(cSkip);
            // console.log(userResponse,"res");
            setUsers((p) => [...p,...userResponse.users])
            if(cSkip + 10 >= userResponse.total)
            {
                setHasMore(false);
            }
            else{
                setSkip(cSkip + 10 );
            }
        }
        catch(error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }

    }


    const handleScroll = () => {
        const element = scrollReference.current;
        if(element.scrollLeft + element.clientWidth >= element.scrollWidth - 20){
            fetchUsers(skip);
        } 
    }
return (
    <div >
       <div className ="scroll-container" ref= {scrollReference} onScroll={handleScroll}>
        { users.map((user) => (
            <UserCard key= {user.id} user= {user}/>
        ))
        }
        {
            loading && <div className="loader-card" >loading... </div>

        }
        {!hasMore && <h2> No More Users</h2>}
       
        
        
       </div>
    </div>
)

}
export default HorizontalScroll