import PreviesSearch from "../Compnents/PreviesSearch"
import RecipeCard from "../Compnents/RecipeCard"
export default function Recipes(){
 const recipes =[
    {
    title:"Chicken Pan Pizza",
    image:"img/gallery/img_1.jpeg",
    authorImg:"img/gallery/img_6.jpeg",
    },
    {
    title:"Chicken Pan Pizza",
    image:"img/gallery/img_2.jpeg",
    authorImg:"img/gallery/img_8.jpeg",
    },
    {
    title:"Chicken Pan Pizza",
    image:"img/gallery/img_3.jpeg",
    authorImg:"img/gallery/img_1.jpeg",
    },
    {
    title:"Chicken Pan Pizza",
    image:"img/gallery/img_4.jpeg",
    authorImg:"img/gallery/img_3.jpeg",
    },
      {
    title:"Chicken Pan Pizza",
    image:"img/gallery/img_1.jpeg",
    authorImg:"img/gallery/img_6.jpeg",
    },
    {
    title:"Chicken Pan Pizza",
    image:"img/gallery/img_2.jpeg",
    authorImg:"img/gallery/img_8.jpeg",
    },
    {
    title:"Chicken Pan Pizza",
    image:"img/gallery/img_3.jpeg",
    authorImg:"img/gallery/img_1.jpeg",
    },
    {
    title:"Chicken Pan Pizza",
    image:"img/gallery/img_4.jpeg",
    authorImg:"img/gallery/img_3.jpeg"
    }
].sort(()=>Math.random()-0.5);
    return(
        <div>
            <PreviesSearch/>
           
            <div className="recipes-container" >
              {recipes.map((recipe,index) => (
                <RecipeCard key={index} recipe={recipe}/>
              ))}

            </div>
        </div>
     )
}