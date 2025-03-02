import Dog1 from "./assets/images/stupdog.jpeg"
import Dog2 from "./assets/images/henddd.jpeg"
import Dog3 from "./assets/images/think.jpeg"
import Dog4 from "./assets/images/think4.jpeg"

const dogImages = {
  "Stupid Dog": Dog1,
  "Innocent Doggy": Dog2,
  "Kiddy": Dog3,
  "Sleepy": Dog4,
  "Kiddy": Dog3,
  "Innocent Doggy": Dog2,
  "Sleepy": Dog4,
  "Stupid Dog": Dog1
  
};


function Imggal(props){
  return(<div style={{backgroundColor:"white",padding:"5px",textAlign:"center",marginTop:"20px",border:"solid black 1.5px",width:"22%"}}>
    <img src={dogImages[props.dogname]} style={{width:"100%"}}></img>
    <p style={{margin:"2px"}}>{props.dogname}</p>
  </div>)
}

var imgArr =["Stupid Dog","Innocent Doggy","Kiddy","Sleepy","Kiddy","Innocent Doggy","Sleepy","Stupid Dog"]

function App(){
    return(
        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
{
imgArr.map(function(item){
return<Imggal dogname={item}></Imggal>
})
}

</div>
    )
}

export default App