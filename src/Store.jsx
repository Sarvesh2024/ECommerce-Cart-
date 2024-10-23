import { configureStore } from '@reduxjs/toolkit';
import rootred from './Components/reducers/Main';

const store = configureStore({
    reducer : rootred,
});

export default store;
