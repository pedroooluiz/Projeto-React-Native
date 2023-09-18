import { useState } from "react";
import { Button, Pressable, StyleSheet, Text } from "react-native";

export default function NumAleatorio({ valorMinimo, valorMaximo }) {

    const [numeroAleatorio, setNumeroAleatorio] = useState('')
    
    const gerarNumeroAleatorio = () => {
      setNumeroAleatorio(parseInt(Math.random() * (valorMaximo - valorMinimo) + valorMinimo))
    }

    return (
      <>
        <Text style={styles.text}>O número aleatório é: {numeroAleatorio}</Text>
        <Pressable style={styles.button} onPress={gerarNumeroAleatorio}>
          <Text style={styles.text2}>Gerar Número Aleatório</Text>
      </Pressable>
      </>      
    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 23,
      backgroundColor: 'black',
      marginBottom: 20,
      color: 'white'
    },

    text2: {
      fontSize: 23,
      backgroundColor: 'black',
      color: 'white'
    },
    
    button: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 20
    }
  
});
