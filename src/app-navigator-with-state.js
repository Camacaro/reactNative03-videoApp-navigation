
import { 
    createReduxContainer
 } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import AppNavigator from './app-navigator';

const AppNavigatorWithState = createReduxContainer(AppNavigator);
const mapStateToProps = (state) => ({
  state: state.navigation,
});
const AppWithNavigationState = connect(mapStateToProps)(AppNavigatorWithState);
export default AppWithNavigationState;