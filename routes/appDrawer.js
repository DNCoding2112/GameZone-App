import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";

const Drawer=createDrawerNavigator();

export default function AppDrawer() {
    return (
        <Drawer.Navigator
        screenOptions={{
            headerShown:false,
            drawerType:'front',
            swipeEnabled:true,
        }}
        >
            <Drawer.Screen 
            name="HomeStack" 
            component={HomeStack} 
            options={{
                title:'Home',
            }}
            />
            <Drawer.Screen 
            name="AboutStack" 
            component={AboutStack} 
            options={{
                title:'About',
            }}
            />
        </Drawer.Navigator>
    );
}