import React from 'react'
// import { recipes } from './data.js';

// function Recipe({ id, name, ingredients }) { 
// return ( <div> 
// <h2>{name}</h2> 
// <ul>
// {ingredients.map(ingredient => <li key={ingredient}> {ingredient} </li> )} 
// </ul>
// </div> ); }

// export default function RecipeList() {
//  return ( <div> 
// <h1>Recipes</h1>
//     {recipes.map(recipe => <Recipe {...recipe} key={recipe.id} />)} 
// </div>);
// }

function FriendListItem ({avatar, name, isOnline, id}) {
    return (
            
                    <div key={id + name}>
                        <img src={avatar} alt="Avatar" width="48" />
                        <p>{name}</p>
                        <p>{isOnline ? "Online" : "Offline"}</p>
                    </div>)
            }
      

const FriendList = ({friends}) => {
    return (
    <ul>
	{friends.map(fr => <li key={fr.id}>
                <FriendListItem {...fr} />
	</li>)}
</ul>
  )
}

export default FriendList