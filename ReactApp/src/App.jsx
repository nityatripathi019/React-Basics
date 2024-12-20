
import './App.css'
import UserCard from './userCard'
import love from "../public/love babbar.jpeg"
import Maharana from "../public/maharana.jpeg"
import Shivaji from "../public/shivaji.jpeg"
function App() {


  return (
    <>
      <div className="container">
        <UserCard img={love} title="Love babbar" desc="Love Babbar is a Software Engineer and a Youtuber, primarily known for his Coding and Software Engineering skills. 
"/>
        <UserCard img={Maharana} title="Maharana Pratap" desc="Maharana Pratap was born to Udai Singh II of Mewar and Jaiwanta Bai in 1540, the year in which Udai Singh ascended to the throne after defeating Vanvir Singh." />
        <UserCard img={Shivaji} title="Shivaji Maharaj" desc="Shivaji I was an Indian ruler and a member of the Bhonsle dynasty. Shivaji carved out his own independent kingdom from the Sultanate of Bijapu" />
      </div>
    </>
  )
}

export default App


//cd ReactApp