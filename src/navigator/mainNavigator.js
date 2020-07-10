import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1176734Navigator from '../features/BlankScreen1176734/navigator';
import BlankScreen1276733Navigator from '../features/BlankScreen1276733/navigator';
import BlankScreen1075992Navigator from '../features/BlankScreen1075992/navigator';
import BlankScreen975954Navigator from '../features/BlankScreen975954/navigator';
import BlankScreen975953Navigator from '../features/BlankScreen975953/navigator';
import BlankScreen775278Navigator from '../features/BlankScreen775278/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen1176734: { screen: BlankScreen1176734Navigator },
BlankScreen1276733: { screen: BlankScreen1276733Navigator },
BlankScreen1075992: { screen: BlankScreen1075992Navigator },
BlankScreen975954: { screen: BlankScreen975954Navigator },
BlankScreen975953: { screen: BlankScreen975953Navigator },
BlankScreen775278: { screen: BlankScreen775278Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
