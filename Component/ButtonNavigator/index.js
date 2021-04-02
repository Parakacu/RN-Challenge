import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import TabItem from '../TabItem'


const ButtonNavigator = ({ state, descriptors, navigation }) => {
    return(
        <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem  key = {index} title = {label} active={isFocused} onPress={onPress} />
        );
      })}
    </View>
    )
}
export default ButtonNavigator;
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingHorizontal: 32,
        paddingVertical: 12,
        backgroundColor: 'white',
        borderTopWidth: 1
    },
});