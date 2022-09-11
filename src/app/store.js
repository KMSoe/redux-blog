import { configureStore } from '@reduxjs/toolkit'
import { useReducer } from 'react'
import postsSlice from './features/posts/postsSlice'

export default configureStore({
  reducer: {
    posts: postsSlice,
    users: useReducer
  }
})
