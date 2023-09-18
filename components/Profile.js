import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Profile(props) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `${props.imgUri}` }}
                style={styles.imagem}
            />

            <View style={styles.container2}>
                <Text style={[styles.texto, styles.label]}>Nome:</Text>
                <Text style={styles.texto}>{props.nome}</Text>
            </View>

            <View style={styles.container2}>
                <Text style={[styles.texto, styles.label]}>Gênero:</Text>
                <Text style={styles.texto}>{props.genero}</Text>
            </View>

            <View style={styles.container2}>
                <Text style={[styles.texto, styles.label]}>Telefone:</Text>
                <Text style={styles.texto}>{props.telefone}</Text>
            </View>

            <View style={styles.container2}>
                <Text style={[styles.texto, styles.label]}>Email:</Text>
                <Text style={styles.texto}>{props.email}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: 20,
        gap: 10
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        padding: 15,
        borderColor: 'black',
        borderWidth: 3,
    },
    label: {
        color: '#e6c27c',
        fontWeight: 'bold'
    },
    imagem: {
        width: 200,
        height: 299,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 500,
        padding: 20
    },
    texto: {
        fontSize: 18
    }
})
