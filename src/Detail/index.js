//Detalhe mais aprofundado do produto
import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native'

import Dot from '../component/Dot'
import SizeButton from '../component/SizeButton'
import Button from '../component/Button'
import Footer from '../component/Footer'

export default function Detail ({ navigation }){

    navigation.setOptions({
        headerTitle: 'Iphone 12 128GB Azul'
    })
    return(
        <ScrollView>
            <Image
            source={require('../assets/3.jpg')} 
            style={styles.image}
            resizeMode="cover"
            />

            <View>
                <View>
                    <Text style={[styles.title , {fontSize: 24 }]}>R$ 5.858,07</Text>
                </View>

                <View opacity={0.4}>
                    <Text style={[styles.title , {fontSize: 30 }]}>iPhone 12 128GB - Azul</Text>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color="#1C1C1C"/>
                    <Dot color="#FFFFF0"/>
                    <Dot color="#FF6347"/>
                    <Dot color="#98FB98"/>
                    <Dot color="#6495ED"/>
                </View>
                
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <ScrollView horizontal showsVerticalScrollIndicator={false}>
                        <SizeButton bgColor="#000000" color="#FFF">128 GB</SizeButton>
                        <SizeButton >64 GB</SizeButton>
                        <SizeButton >256 GB</SizeButton>
                    </ScrollView>
                </View>
                < View style={styles.textContent}>
                    <Text style={styles.textTitle}>
                        iPhone 12 128GB - Azul
                    </Text>
                    <Text style={styles.textContent}>
                        Com chip A14 Bionic mais rápido em um smartphone. Tela OLED de ponta a ponta.
                        Em modo Noite em todas as câmeras. A melhor tela de iPhone até hoje, com 
                        constraste surpreendente e resolução mais alta. Ela é feita com o novo
                        Ceramic Shield, que é quatro vezes
                        mais resistente a quedas. 
                    </Text>
                    <Text style={styles.textList}>
                    • Conteúdo da Caixa: iPhone com iOS,Cabo de USB-C para Lightning e Documentação.
                    </Text>
                    
                    <Button/>

                    <View style={styles.line}/>

                    <Footer/>


                </View>
            </View>
        </ScrollView>   
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    image: {
        width:'100%',
    },
    title:{
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%'
    },
    dotContainer:{
        flexDirection: 'row',
        marginVertical: '7%'
    },
    textContent:{
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle:{
        fontSize: 22,
        marginVertical: '2%'
    },
    textList:{
        fontSize: 16,
        lineHeight: 25
    },
    line:{
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%'
    }
});