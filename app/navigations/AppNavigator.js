import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import HomeScreen from '../screens/home/HomeScreen';
import SignInScreen from '../screens/signIn/SignInSreen';
import SignUpScreen from '../screens/signUp/SignUpScreen';
import ForgotPasswordScreen from '../screens/forgotPass/ForgotPasswordScreen';
import Cart from '../screens/cart/Cart'
import Select from '../screens/select/Select'
import ListStore from '../screens/listStore/ListStore';
import DetailProduct from '../screens/detailProduct'

const AppStack = createStackNavigator(
    {
        Cart: Cart,
        HomeScreen: HomeScreen,
        Select: Select,
        DetailProduct,
        ListStore,
    },
    {
        headerMode: 'none'
    }
);

const AuthStack = createStackNavigator(
    {
        SignIn: SignInScreen,
        ForgotPassword: ForgotPasswordScreen,
        SignUp: SignUpScreen
    },
    {
        headerMode: 'none'
    }
);

const AppNavigator = createSwitchNavigator({
    Auth: AuthStack,
    App: AppStack,
});

export default AppContainer = createAppContainer(AppNavigator)

