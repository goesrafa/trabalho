//Criação das propagandas 
import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Mac from '../Mac'

export default function Footer(){
    return(
        <View>
            <Text style={styles.title}>VOCÊ PODE GOSTAR</Text>
            <View style={{flexDirection: 'row'}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View>
                        <Mac img={require('../../assets/4.jpg')} cost="R$ 3.499,00">
                        iPhone XR Apple Branco, 64GB
                        </Mac>
                    </View>
                    <View>
                        <Mac img={require('../../assets/2.jpg')} cost="R$ 39.999,99">
                        iMac Pro - Apple
                        </Mac>
                    </View>
                    <View>
                        <Mac img={require('../../assets/1.jpg')} cost="R$ 11.199,00">
                        MacBook Air Apple 13,3”, 8GB, SSD 512GB, Intel Core i5 quatro núcleos de 1,1 GHz, Prata
                        </Mac>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
})