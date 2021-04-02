import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../Component/Header'
import { ILAvatar } from "../../Assets/Illustration";
import Gap from "../../Component/Gap";
import { Bahasa, EditProfile } from '../../Component';

const Profile = () => {
    return (
        <View style = {styles.container} >
            <Header title = "Profile"/>
            <Gap height = {25}/>
            <View style = {styles.content} >
                <ILAvatar/>
                <Text style = {styles.titlecontent} >Joko</Text>
                <Text style = {styles.desccontent} >Designer</Text>
            </View>
            <Gap height = {25}/>
            <View>
                <EditProfile Icon = "AKun" />
                <Gap height = {25}/>
                <Bahasa Image = "Bahasa" />
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    content: {
        alignItems: 'center'
    },
    titlecontent: {
        marginTop: 20,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    desccontent: {
        marginTop: 5,
        fontSize: 16,
        color: '#acacac'
    }
})
