//Página principal do App
import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import Mac from '../../component/Mac'

export default function Home (){
const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Image 
            source={require('../../assets/banner.png')}
            style={styles.image}
            />        


            <View style={styles.textContainer}>
                <Text style={styles.text}>Linha Apple</Text>
                <Text style={[styles.text, {color:'#CECECF'}]}>•</Text>
                <Text style={[styles.text, {color:'#CECECF'}]}>Linha Apple</Text>
                <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf:'center'}}>
                    <MaterialIcons
                    name="filter-list"
                    size={24}
                    color="#000"
                    />
                </TouchableOpacity>
            </View> 

            <View style={styles.line}/>  

            <ScrollView>
                <Text style={styles.text}>LANÇAMENTOS</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Mac img={require('../../assets/3.jpg')} cost="R$ 5.858,07" onClick={()=> navigation.navigate('Detail')}>
                    iPhone 12 128GB - Azul
                    </Mac>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Mac img={require('../../assets/2.jpg')} cost="R$ 39.999,99" onClick={()=> navigation.navigate('Detail2')} >
                        iMac Pro - Apple
                    </Mac>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Mac img={require('../../assets/1.jpg')} cost="R$ 11.199,00" onClick={()=> navigation.navigate('Detail')}>
                    MacBook Air Apple 13,3”, 8GB, SSD 512GB, Intel Core i5 quatro núcleos de 1,1 GHz, Prata - MVH42BZ/A
                    </Mac>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Mac img={require('../../assets/4.jpg')} cost="R$ 3.499,00" onClick={()=> alert('Clicou')}>
                    iPhone XR Apple Branco, 64GB Desbloqueado - MH6N3BR/A
                    </Mac>
                </View>
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Mac img={require('../../assets/5.jpg')} cost="R$ 2.500,00" onClick={()=> alert('Clicou')}>
                    	Iphone X 64 Tb 
                    </Mac>
                </View>
                
            </ScrollView>
        </View>        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width:'100%',
        backgroundColor: '#FFF'
    },
    header: {
        marginBottom: 8
    },
    image: {
        width: '100%'
    },
    textContainer:{
        flexDirection: 'row-reverse',
        marginVertical: '4%',
        marginHorizontal: '4%'
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line:{
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2
    },
    macImg:{
        width:175,
        height: 175
    }
});