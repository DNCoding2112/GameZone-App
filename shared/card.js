import { StyleSheet, View } from "react-native"

export default function Card(props){
    return(
        <View style={styles.container}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        padding:20,
        borderWidth:3,
        borderRadius:15,
        elevation:6,
        borderStyle:'dashed',
        // borderColor:'#F5B7B1',
        margin: 5,
        // backgroundColor:'#FAF3E0',
        borderColor:'#FFFDD0',
        // backgroundColor:'#DDDFF0',
        backgroundColor:'#DDDFF0',
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:6,
    },
    cardContent:{
        margin:2,
    }
})
