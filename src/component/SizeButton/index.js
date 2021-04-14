//Criação do Button de capacidade
import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function SizeButton(props){
    return(
        <View style = {[styles.container, {backgroundColor: props.bgColor || '#FFF'}]}>
            <Text style={[styles.text, { color: props.color || '#696969'}]}>
                {props.children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor:'#000000',
        borderWidth: 3,
        marginHorizontal: 10   
    },
    text: {
        color:"#FFF",
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});