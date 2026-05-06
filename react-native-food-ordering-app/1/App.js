import { View,Text, SafeAreaView, StyleSheet } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

  return (
    <SafeAreaView style={styles.safeareaview}>
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!!!</Text>
      <Text style={styles.subtitleText}>My Name Is</Text>
      <View style={styles.innerContainer}>
      <Text style={styles.innerText}>Hoey Ning Cho </Text>
      </View>
      
    </View>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeareaview:{
    flex:1,
    width:'100%',
    height:'100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#E6E6FA',
    padding: 8,
  },

  welcomeText: {
    fontSize: 90,
    textTransform: 'uppercase',
    fontFamily:'Times New Roman',
    fontWeight: 'bold',
    color: '#F08080',
    textAlign: 'center'
  },
  subtitleText: {
    fontSize: 30,
    fontFamily:'Times New Roman',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#F08080',
    marginBottom: 20,
    textAlign: 'center'
  },
  innerContainer:{
    width:"80%",
    height:"55%",
    backgroundColor:'#FFF0F5',
    borderRadius:25,
    justifyContent:'center'
  },
  innerText:{
    fontSize:60,
    fontFamily:'Georgia',
    textAlign:'center',
    color:'#778899',
    fontWeight:'900'
  }
});
