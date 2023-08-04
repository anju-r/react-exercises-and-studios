import styles from './Description.module.css';
import React from 'react';
function RecipeAuthor(){
    let authorLink = "https://simplyhomecooked.com/easy-hanami-dango-recipe/";
    let authorPhoto = "https://simplyhomecooked.com/wp-content/uploads/2018/10/dina-125.png";
    let authorName = "Dina";

return(
    <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "Mrs.Dina" className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>Anjali recipes</a> 
      </div>
   </div>

)
}
class RecipeDescription extends React.Component{
    render(){
        return(
            <div> 
            <div>
               <h1>Dango recipe</h1>
               <p>This Hanami Dango recipe only uses a few ingredients and is really easy to follow.</p>
            </div>
            <RecipeAuthor />
         </div>
        )
    }
}
export default RecipeDescription;