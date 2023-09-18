import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Cabecalho from './components/Cabecalho';
import NumAleatorio from './components/NumAleatorio';
import BiscSorte from './components/BiscSorte';
import Profile from './components/Profile';
//São os imports coisas normais

export default function App() {
  //Tudo que for retornar na tela tem que ser na view

  return (
    <>
      <Cabecalho min="30" max="20"/>
      <View style={styles.container}>
        <Text>Está funcionand</Text>
        <NumAleatorio valorMinimo={10} valorMaximo={100} />
        <BiscSorte />
        <Profile />
      </View> 
    </>
  );
}

//Aqui fica o styles que é a estilização da page e ele é chamado lá em cima
//Está sendo citado também dentro do views
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIcon: {
    paddingTop: 10,
  },
});
