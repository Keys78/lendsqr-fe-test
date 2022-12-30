import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import usersService from './usersService'

const initialState = {
    allUsers:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
  }

  // Get all users
export const getAllUsers = createAsyncThunk(
    'users',
    async (_, thunkAPI) => {
      try {
        return await usersService.getAllUsers()
      } catch (error) {
        return thunkAPI.rejectWithValue('error')
      }
    }
  )

  export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      resetUsers: (state) => initialState,
      getAllUsers: (state, action) => {
        state.allUsers = action.payload.data
    },
  },
      
   
    extraReducers: (builder) => {
      builder
        .addCase(getAllUsers.pending, (state: any) => {
          state.isLoading = true
        })
        .addCase(getAllUsers.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.allUsers = action.payload.data
        })
        .addCase(getAllUsers.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = 'error occured'
        })
      
    },
  }
)
  
  export const { resetUsers } = usersSlice.actions
  export default usersSlice.reducer