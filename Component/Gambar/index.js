import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ILImage } from "../../Assets/Illustration";

const Gambar = ({Gambar, onPress}) => {
    const Image = () => {
        if(Gambar === "upload") {
            return <ILImage onPress = {onPress}/>
        }
        return <ILImage/>
    }
    return (
        <TouchableOpacity style = {styles.container} onPress={onPress} >
            <Image/>
        </TouchableOpacity>
    )
}

export default Gambar

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right : 30,
        bottom: 50,
    }
})
