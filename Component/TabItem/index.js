import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IcNoteActive, IcNoteNon, IcProfileActive, IcProfileNon } from "../../Assets/Icon";

const TabItem = ({title, active, onPress}) => {
    const Icon = () => {
        if(title === "Profile") {
            return active ? <IcProfileActive/> : <IcProfileNon/>
        }
        if(title === "Note") {
            return active ? <IcNoteActive/> : <IcNoteNon/>
        }

        return  <IcProfileActive/>
    }
    return (
        <TouchableOpacity style = {styles.container} onPress={onPress} >
            <Icon/>
            <Text style = {styles.text(active)} >{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (active) => (
        {
            fontSize: 10,
            color: active ? "black" : '#acacac',
            fontFamily: "Nunito-SemiBold"
        }
    ),
})
