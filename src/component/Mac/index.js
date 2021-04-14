import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function Mac(props){
function filterDesc(desc){
    if(desc.lenght < 27){
        return desc;
    }
    return `${desc.substring(0, 28)}...`
}


    return(
       <TouchableOpacity style={styles.container} onPress={props.onClick}>
           <Image 
           source={props.img}
           style={styles.macImg}
           />
           <Text style={styles.macText}>
               {filterDesc(props.children)}
           </Text>
           <View opacity={0.4}>
            <Text style={styles.macText}>{props.cost}</Text>
           </View>
       </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        padding: '2%',
        alignItems: 'center',
        justifyContent: 'center'

    },
   macText:{
       fontSize: 16
   }
});