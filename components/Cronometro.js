import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Cronometro() {
  const [tempo, setTempo] = useState(0);
  const [cronometrando, setCronometrando] = useState(false);
  const temporizadorRef = React.useRef(null);

  useEffect(() => {
    if (cronometrando) {
      temporizadorRef.current = setInterval(() => {
        setTempo((prevTempo) => prevTempo + 1);
      }, 1000);
    } else {
      clearInterval(temporizadorRef.current);
    }

    return () => {
      clearInterval(temporizadorRef.current);
    };
  }, [cronometrando]);

  const iniciarPausarCronometro = () => {
    setCronometrando((prevState) => !prevState);
  };

  const reiniciarCronometro = () => {
    clearInterval(temporizadorRef.current);
    setCronometrando(false);
    setTempo(0);
  };

  const formatarTempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos < 10 ? '0' : ''}${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={cronometro} style={styles.imagem} />
        <Text style={styles.tempo}>{formatarTempo(tempo)}</Text>
        <View style={styles.botoes}>
          <Pressable
            style={styles.botao}
            onPress={iniciarPausarCronometro}
          >
            <Text style={styles.textoBotao}>
              {cronometrando ? 'Pausar' : 'Iniciar'}
            </Text>
          </Pressable>
          <Pressable
            style={styles.botao}
            onPress={reiniciarCronometro}
          >
            <Text style={styles.textoBotao}>Reiniciar</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tempo: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  viewBotoes: {
    flexDirection: 'row',
    marginTop: 40,
    gap: 15
  },
  botao: {
    backgroundColor: 'lightgray',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagem: {
    width: 300,
    height: 300
  }
});
