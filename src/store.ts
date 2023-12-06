import { configureStore } from '@reduxjs/toolkit';
import { authenticationInfoReducer } from './features/authenticationInfoSlicer';
import { useDispatch } from 'react-redux';

const reducer = {
    authenticationInfo: authenticationInfoReducer
}

const store = configureStore({
    reducer
});

export default store