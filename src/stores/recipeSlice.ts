import { StateCreator } from "zustand";
import {
  getCategories,
  getRecipeById,
  getRecipies,
} from "../services/RecipeService";
import type { Categories, Drink, Drinks } from "../types";
import { SearchFilter, Recipe } from "../types/index";

export type RecipesSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipies: (SearchFilter: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>;
  closeModal: () => void;
};

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  selectedRecipe: {} as Recipe,
  modal: false,
  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories,
    });
  },
  searchRecipies: async (filters) => {
    const drinks = await getRecipies(filters);
    set({
      drinks,
    });
  },
  selectRecipe: async (id) => {
    const selectedRecipe = await getRecipeById(id);
    set({
      selectedRecipe,
      modal: true,
    });
    console.log("====================================");
    console.log(selectedRecipe);
    console.log("====================================");
  },
  closeModal: () => {
    set({
      modal: false,
      selectedRecipe: {} as Recipe,
    });
  },
});
