import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const { favorites, addFavorite, removeFavorite } = useRecipeStore();

  const isFavorite = favorites.includes(recipeId);

  const toggleFavorite = () => {
    isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId);
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? '💔 Remove from Favorites' : '❤️ Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
