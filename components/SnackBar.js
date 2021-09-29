import React, {useEffect} from 'react';
import { StyleSheet, Text,TouchableOpacity, View} from 'react-native';
export default function Snackbar({isVisible,timeout=5000,text,type,boxStyle,textStyle,onClose}){
    useEffect(()=>{
        setTimeout(function(){
            console.log("Hiding snackbar in 5 seconds");
            onClose();
        },timeout);
    },[]);
    function renderTypeStyle(type)
    {
        if(type==="error")
        {
            return styles.errorBox;
        }
        if(type==="success")
        {
            return styles.successBox;
        }
        if(type==="info")
        {
            return styles.infoBox;
        }
        return "";
    }
    return(
        isVisible?
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.closeItem}><Text style={styles.closeItemText}>X</Text></TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </View>
        </View>
        :null
    );
}
const styles=StyleSheet.create({
    container:{
        position:"absolute",
        bottom:50,
        left:0,
        right:0,
        justifyContent:"center",
        alignItems:"center"
    },
    content:{
        margin:"auto",
        width:"80%",
        borderRadius:6,
        shadowColor:"grey",
        shadowOpacity:0.8,
        shadowOffset:{width:0,height:2},
        elevation:10,
        backgroundColor:"#303030"
    },
    closeItem:{
        alignSelf:"flex-end",
        justifyContent:"center",
        alignItems:"center",
        width:17,
        height:17,
        marginTop:2,
        marginRight:2,
        borderRadius:50
    },
    closeItemText:{
        fontSize:17,
        fontWeight:"600",
        color:"white"
    },
    textContainer:{
        alignItems:"center",
        justifyContent:"center",
        paddingBottom:10,
        paddingHorizontal:4,
    },
    text:{
        textAlign:"center",
        fontSize:15,
        color:"#f1f1f1"
    },
    errorBox:{
        backgroundColor:"#da0b0b"
    },
    successBox:{
        backgroundColor:"#00cc00"
    },
    infoBox:{
        backgroundColor:"#00ace6"
    }
})