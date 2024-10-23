import { configureStore } from '@reduxjs/toolkit';
import rootred from './Components/Reducer/main';

const store = configureStore({
    reducer : rootred,
});

export default store;