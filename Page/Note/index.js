import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../Component/Header'
import TodoList from '../../Component/ToDoList'
import Gap from '../../Component/Gap'
import Gambar from '../../Component/Gambar'
import { Tambah } from '../../Component'

const Note = ({navigation}) => {
    return (
        <View style = {styles.container} >
            <Header title = "All Notes"/>
            <Gap height = {25}/>
            {/* Add Todo */}
            <TodoList/>
            {/* Add Gamabar */}
            <Gambar onPress = {() => navigation.replace('Loading') } />
        </View>
    )
}

export default Note

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})
