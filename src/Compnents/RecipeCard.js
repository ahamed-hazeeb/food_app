import CustomeImage from "./CustomImage";

export default function RecipeCard({recipe}){
   
    return(
        

     <div className="recipe-card">
    
    <CustomeImage imgSrc={recipe.image} pt="65%"/>
        <div className="recipe-card-info">
            <img className="auther-img" alt="" src={recipe.authorImg}/>           
            <p className="recipe-titel">{recipe.title}</p>
            <p className="recipe-desc">Lorem lpsum is simply dummy text of the printing and typesetting industry</p>
            <a href="#!" className="view-btn">VIEW RECIPE</a>
        </div>
     </div>
    )
}