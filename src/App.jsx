
import Cards from "./cards";
import './cards.css'

function App() {
 
const content= [
  {
    // id: 1,
    title: "AI + RPA is what we do",
    detail: "Future-Proof your business. Drive efficiency, profitability and deliver on customer experience",
    img: "https://www.xivtech.io./rp2.jpg",
  },
  {
    // id: 2,
    title: "Make Bolder Choices",
    detail: "Digital focused strategies to realize market-changing ideas",
    img: "https://www.xivtech.io./p1.png",
  },
  {
    // id: 3,
    title: "Innovate with Speed",
    detail: "Create higher quality software, deliver on customer expectations and business goals",
    img: "https://www.xivtech.io./p2.jpg",
  },
  {
    // id: 3,
    title: "Embrace Cloud",
    detail: "With Cloud-First accelerate innovation and optimize performance",
    img: "https://www.xivtech.io./p3.jpg",
  },

];

  return (
    <>
       <section main-section>
     
       <div className="container">
       <h1 className='title'>Let's Collaborate</h1> 
           {content.map((item) =>{
            const {title, detail, img} = item;
               return(
                <Card item={item} />
               )
           })}
        </div>
       </section>
    </>
  )
}

const Card = (props) =>{
  const {title, detail, img} = props.item;
  return(
     <>
            <div className="first_card">
                <div className="card_detail">
                    <h1>{title}</h1>
                    <h3>{detail}</h3>
                </div>
                <div className="card_img">
                   <img src={img} alt="" />
                </div>
              </div>
    
     </>
  )
}


export default App
