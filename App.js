import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
//São os imports coisas normais

export default function App() {
  //Tudo que for retornar na tela tem que ser na view
  return (
    <View style={styles.container}>
      <Text>Tray again!</Text>
      
      <View style={styles.imageIcon}>
        <Image style={styles.imageIcon} source={require('./assets/favicon.png')} />
      </View>
      
      
      
    </View>
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
