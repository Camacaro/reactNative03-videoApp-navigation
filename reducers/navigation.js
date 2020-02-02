import AppNavigator from '../src/app-navigator';
import { connect } from'react-redux';
import {
  createReduxContainer,
  createNavigationReducer,
} from'react-navigation-redux-helpers';

// const navigationReducer = createReduxContainer( AppNavigator );

// export default navigationReducer;

// const reduxContainer = createReduxContainer(AppNavigator, 'root');
const reduxContainer = createNavigationReducer(AppNavigator);

export default reduxContainer;

// class AppNavigatorWithState extends reduxContainer{

// }

// function mapStateToProps(state) {
//   return {
//     state: state.navigation
//   }
// }

// export default connect(mapStateToProps)(AppNavigatorWithState)