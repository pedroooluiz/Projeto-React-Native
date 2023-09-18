import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
const imagemBiscoitoAberto = require('./assets/biscoito_aberto.png');
const imagemBiscoitoFechado = require('./assets/biscoito_fechado.png');

export default function BiscSorte() {

  const [biscoitoQuebrado, setBiscoitoQuebrado] = useState(false) 
  const [frase, setFrase] = useState('') 

  const frasesBiscoitoDaSorte = [
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.",
    "O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.",
    "Você precisa fazer aquilo que pensa que não é capaz de fazer.",
    "Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.",
    "A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.",
    "A vida é para quem topa qualquer parada. Não para quem pára em qualquer topada.",
    "Motivação não é sinônimo de transformação, mas um passo em sua direção.",
    "O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé, motivação e criatividade."
  ];
  
  
  function exibirFrase() {
    setBiscoitoQuebrado(true)
    const numeroAleatorio = Math.round((Math.random() * frasesBiscoitoDaSorte.length))
    setFrase(frasesBiscoitoDaSorte[numeroAleatorio])
  }

  return (
      <>
        <View style={styles.container}>
              <Image
                style={styles.imagem}
                source={biscoitoQuebrado 
                  ? imagemBiscoitoAberto 
                  : imagemBiscoitoFechado}
              />
    
              <Text style={styles.mensagem}>
                {
                  biscoitoQuebrado ? frase : " "
                }
              </Text>
    
              <Pressable 
                  style={styles.botaoAmarelo}
                  onPress={exibirFrase} 
                  disabled={biscoitoQuebrado}
                  >
                <Text style={styles.textoBotaoAmarelo}>Quebrar Biscoito</Text>
              </Pressable>
    
              <Pressable 
                style={styles.botaoAmarelo} 
                onPress={() => setBiscoitoQuebrado(false)}>
                <Text style={styles.textoBotaoAmarelo}>Reiniciar Biscoito</Text>
              </Pressable>
    
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagem: {
    width: 250,
    height: 250,
  },

  mensagem: {
    fontSize: 20,
    color: '#9f5927',
    marginBottom: 10,
    textAlign: 'center',
  },

  botaoAmarelo: {
    backgroundColor: "#9f5927", 
    paddingVertical: 10,
    width: 180,
    marginBottom: 20,
  },

  textoBotaoAmarelo: {
    alignSelf: "center",
    fontSize: 15,
    color: "#ffffff",
    fontWeight: "bold",
  },
});
