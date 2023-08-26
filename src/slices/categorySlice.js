import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryApi from "../apis/categoryApi";

export const getCategories = createAsyncThunk(
  "categories/getCategoryList",
  async (rejectWithValue) => {
    try {
      const response = await categoryApi.getCategories();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createCategory = createAsyncThunk(
  "/categories/createCategory",
  async (category, rejectWithValue) => {
    try {
      const response = await categoryApi.createCategory(category);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteCategoryById = createAsyncThunk(
  "accounts/deleteAccount",
  async (category, rejectWithValue) => {
    try {
      const response = await categoryApi.deleteCategoryById(category);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateCategoryById = createAsyncThunk(
  "categories/updateCategory",
  async (category, rejectWithValue) => {
    try {
      const response = await categoryApi.updateCategoryById(category);
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    loading: false,
    error: null,
    category: {},
  },
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.loading = true;
    },
    [getCategories.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = action.payload.data.Category;
    },
    [createCategory.pending]: (state) => {
      state.loading = true;
    },
    [createCategory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [createCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.category = action.payload.data.Category;
      console.log(state.category);
    },
    [deleteCategoryById.pending]: (state) => {
      state.loading = true;
    },
    [deleteCategoryById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteCategoryById.fulfilled]: (state, action) => {
      state.loading = false;
      state.category = action.payload.data.Category;
    },
    [updateCategoryById.pending]: (state) => {
      state.loading = true;
    },
    [updateCategoryById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [updateCategoryById.fulfilled]: (state, action) => {
      state.loading = false;
      state.category = action.payload.data.Category;
    },
  },
});

export default categorySlice.reducer;
