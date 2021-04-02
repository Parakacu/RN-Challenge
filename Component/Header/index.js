import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({title, active}) => {
    return (
        <View style = {styles.container} >
            <Text style = {styles.title(active)} > {title} </Text>
        </View>
    )
}

export default Header
const styles = StyleSheet.create({
    container : {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    title: (active) => ({
        color: active ? 'white' : 'black',
        textAlign: 'center',
        fontSize: 20
    })
})
