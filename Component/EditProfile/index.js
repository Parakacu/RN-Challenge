import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcAkun, IcArrow } from '../../Assets/Icon'

const EditProfile = ({title}) => {
    const Icon = () => {
        if(title === "Akun") {
            return <IcAkun/>
        }
        return <IcAkun/>
    }

    return (
        <View style = {styles.container} >
            <View style = {styles.content} >
                <Icon/>
                <View style = {styles.isi} >
                    <Text style = {styles.text} >Edit Profile</Text>
                    <Text style ={styles.desc} >Last updated yesterday</Text>
                </View>
            </View>
            <IcArrow/>
        </View>
    )
}

export default EditProfile

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
