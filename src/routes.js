import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/pages/main';

const Routes = createAppContainer(
  createStackNavigator({
    Main: { screen: Main },
  }),
);

export default Routes;
