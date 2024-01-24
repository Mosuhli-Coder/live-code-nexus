// reducers/uiReducer.js
const initialState = {
    isProfileDropdownOpen: false,
  };
  
  const uiReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_PROFILE_DROPDOWN':
        return {
          ...state,
          isProfileDropdownOpen: !state.isProfileDropdownOpen,
        };
      default:
        return state;
    }
  };
  
  export default uiReducer;
  