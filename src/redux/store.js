import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from '../slices/DarkMode/darkModeSlice'

export default configureStore({
    reducer: {
        darkMode: darkModeReducer,
    },
})
