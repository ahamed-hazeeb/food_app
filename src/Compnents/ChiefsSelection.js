import ChiefCard from "./ChiefCard";
export default function ChiefsSelection(){

  const chiefs =[
    {
      name:"Juan Carlos",
      img:"/img/gallery/img_1.jpeg",
      recipesCount:"05",
      cuisine:"Maxican"
    },
    {
      name:"Juan Carlos",
      img:"/img/gallery/img_2.jpeg",
      recipesCount:"02",
      cuisine:"Maxican"
    },
    {
      name:"Juan Carlos",
      img:"/img/gallery/img_3.jpeg",
      recipesCount:"03",
      cuisine:"Maxican"
    },
    {
      name:"Juan Carlos",
      img:"/img/gallery/img_4.jpeg",
      recipesCount:"04",
      cuisine:"Maxican"
    },
    {
      name:"Juan Carlos",
      img:"/img/gallery/img_5.jpeg",
      recipesCount:"05",
      cuisine:"Maxican"
    },
    {
      name:"Juan Carlos",
      img:"/img/gallery/img_6.jpeg",
      recipesCount:"06",
      cuisine:"Maxican"
    },
  ]
    return (
       <div className="section chiefs">
         <h1 className="titel">Our Top Chiefs</h1>
         <div className="top-chiefs-container">
         {
          chiefs.map(chief=> <ChiefCard key={chief.name} chief={chief}/>)
         }
         </div> 
      </div>
   
    )
}
