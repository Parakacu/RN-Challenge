import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcBahasa, IcArrow } from '../../Assets/Icon'

const Bahasa = ({title}) => {
    const Image = () => {
        if (title ==- "Bahasa"){
            return <IcBahasa/>
        }
        return <IcBahasa/>
    }
    return (
        <View style = {styles.container} >
            <View style = {styles.content} >
                <Image/>
                <View style = {styles.isi} >
                    <Text style = {styles.text} >Language</Text>
                    <Text style ={styles.desc} >English</Text>
                </View>
            </View>
            <IcArrow/>
        </View>
    )
}

export default Bahasa

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingVertical: 10
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    isi: {
        paddingHorizontal: 25
    },
    text: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    desc: {
        color: "#acacac",
        fontSize: 10
    }
})
