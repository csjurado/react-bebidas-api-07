import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";
import {
  createNotificationSlice,
  notificationSliceType,
} from "./notificationSlice";
export const useAppStore = create<
  RecipesSliceType & FavoritesSliceType & notificationSliceType
>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
  }))
);
