//Detalhe mais aprofundado do produto
import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native'

import Dot from '../component/Dot'
import SizeButton from '../component/SizeButton'
import Button from '../component/Button'
import Footer from '../component/Footer'

export default function Detail ({ navigation }){

    navigation.setOptions({
        headerTitle: 'iMac Pro - Apple'
    })
    return(
        <ScrollView>
            <Image
            source={require('../assets/2.jpg')} 
            style={styles.image}
            resizeMode="cover"
            />

            <View>
                <View>
                    <Text style={[styles.title , {fontSize: 24 }]}>R$ 39.999,99</Text>
                </View>

                <View opacity={0.4}>
                    <Text style={[styles.title , {fontSize: 30 }]}>iMac Pro - Apple</Text>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color="#1C1C1C"/>
                </View>
                
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <ScrollView horizontal showsVerticalScrollIndicator={false}>
                        <SizeButton bgColor="#000000" color="#FFF">SSD 512GB</SizeButton>
                    </ScrollView>
                </View>
                < View style={styles.textContent}>
                    <Text style={styles.textTitle}>
                    iMac Pro - Apple
                    </Text>
                    //Descrição do produto
                    <Text style={styles.textContent}> 
                    Armazene mais. Espere menos. 
                    O SSD agora é padrão em todos os modelos de iMac, trazendo alta capacidade e velocidades ultrarrápidas. 
                    O iMac de 27 polegadas pode ser configurado com SSD de até 8 TB13, 
                    e a velocidade de gravação e leitura sequencial pode atingir 3,4 GB/s14. 
                    Você acessa quase que instantaneamente todas as suas fotos, vídeos, arquivos pesados e apps profissionais.
                    </Text>
                    <Text style={styles.textList}>
                    • Conteúdo da Caixa: iMac, Cabo de alimentação, Magic mouse 2, cabo lightning para USB, Magic KeyBord
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