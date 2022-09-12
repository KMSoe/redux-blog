import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';

// const initialState = [
//     { id: '1', title: 'First Post!', content: 'Hello!', reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 } },
//     { id: '2', title: 'Second Post', content: 'More text', reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 } }
// ]

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await client.get('/fakeApi/posts');
    return response.data;
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.posts.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        content,
                        user: userId,
                        reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 }
                    }
                }
            }
        },
        postUpdated(state, action) {
            const { id, title, content } = action.payload;
            const existingPost = state.posts.find(post => post.id === id)

            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.posts.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
});

export const selectAllPosts = state => state.posts.posts

export const selectPostById = (state, postId) =>
    state.posts.posts.find(post => post.id === postId)

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;