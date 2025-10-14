import { fetchUserStart, fetchUserSuccess, fetchUserFailure } from './userSlice';

export const fetchUserData = () => async (dispatch) => {
  try {
    dispatch(fetchUserStart());

    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const data = await response.json();
    dispatch(fetchUserSuccess(data));
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};
