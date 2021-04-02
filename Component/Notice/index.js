import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native'

const Notice = ({onPress}) => {
    return (
        <View style = {styles.container} onPress={onPress} >
            <View>
                <Text style = {styles.active} >Note:</Text>
                <Text style = {styles.desc} >Untuk Menghapus Bisa Langsung Klik List Yang Di Buat</Text>
            </View>
        </View>
    )
}

export default Notice

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    active: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 15,
        width: 300
    }
})
