import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile150238Navigator from '../features/UserProfile150238/navigator';
import Settings150237Navigator from '../features/Settings150237/navigator';
import Settings150235Navigator from '../features/Settings150235/navigator';
import SignIn2150233Navigator from '../features/SignIn2150233/navigator';
import Settings150082Navigator from '../features/Settings150082/navigator';
import UserProfile150075Navigator from '../features/UserProfile150075/navigator';
import Settings150074Navigator from '../features/Settings150074/navigator';
import Settings150072Navigator from '../features/Settings150072/navigator';
import SignIn2150070Navigator from '../features/SignIn2150070/navigator';
import Settings150068Navigator from '../features/Settings150068/navigator';
import UserProfile150061Navigator from '../features/UserProfile150061/navigator';
import Settings150060Navigator from '../features/Settings150060/navigator';
import Settings150058Navigator from '../features/Settings150058/navigator';
import SignIn2150056Navigator from '../features/SignIn2150056/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile150238: { screen: UserProfile150238Navigator },
Settings150237: { screen: Settings150237Navigator },
Settings150235: { screen: Settings150235Navigator },
SignIn2150233: { screen: SignIn2150233Navigator },
Settings150082: { screen: Settings150082Navigator },
UserProfile150075: { screen: UserProfile150075Navigator },
Settings150074: { screen: Settings150074Navigator },
Settings150072: { screen: Settings150072Navigator },
SignIn2150070: { screen: SignIn2150070Navigator },
Settings150068: { screen: Settings150068Navigator },
UserProfile150061: { screen: UserProfile150061Navigator },
Settings150060: { screen: Settings150060Navigator },
Settings150058: { screen: Settings150058Navigator },
SignIn2150056: { screen: SignIn2150056Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
