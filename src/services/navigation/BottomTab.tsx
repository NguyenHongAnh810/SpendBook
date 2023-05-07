import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Create from '../../screens/Create';
import Other from '../../screens/Other';
import Statistical from '../../screens/Statistical';
import Icon from 'react-native-vector-icons/Entypo';
import Const from '../../shared/constants';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  const renderTabIcon = (route: any, focused: boolean) => {
    let iconName: string = 'pencil';
    switch (route.name) {
      case 'Thống kê':
        iconName = 'list';
        break;
      case 'Thêm':
        iconName = 'pencil';
        break;
      case 'Khác':
        iconName = 'dots-three-horizontal';
        break;
    }
    return (
      <Icon name={iconName} size={Const.sizeIcon.larger} color={focused ? 'orange' : 'gray'} />
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => renderTabIcon(route, focused),
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
      })}>
      <Tab.Screen name="Thống kê" component={Statistical} />
      <Tab.Screen name="Thêm" component={Create} />
      <Tab.Screen name="Khác" component={Other} />
    </Tab.Navigator>
  );
};
