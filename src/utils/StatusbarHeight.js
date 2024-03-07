import { Platform, StatusBar } from "react-native";

// Get the status bar height
const getStatusBarHeight = () => {
    return Platform.OS === 'android' ? StatusBar.currentHeight : StatusBar.currentHeight || 20;
};
export const StatusBarHeight = getStatusBarHeight();
