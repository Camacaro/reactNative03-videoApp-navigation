import { combineReducers } from "redux";
import navigationReducer from "./navigation";
import videosReducer from "./video";

const reducer = combineReducers({
    videos: videosReducer,
    navigation: navigationReducer
});

export default reducer;