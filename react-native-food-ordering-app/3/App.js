import {Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.row}>
        <View style={[styles.col1, styles.borderBottom, styles.borderRight]} >
        <Text style={{fontSize:110,color:'salmon'}}>X</Text>
        </View>
        
        <View style={[styles.col2, styles.borderBottom, styles.borderRight]} >
        <Text style={{fontSize:110,color:'#808000'}}>O</Text>
        </View>

        <View style={[styles.col3, styles.borderBottom]} >
        <Text style={{fontSize:110,color:'#808000'}}>O</Text>
        </View>

      </View>

      
      <View style={styles.row}>
        <View style={[styles.col1, styles.borderBottom, styles.borderRight]} >
        <Text style={{fontSize:110,color:'salmon'}}>X</Text>
        </View>

        <View style={[styles.col2, styles.borderBottom, styles.borderRight]} >
        <Text style={{fontSize:110,color:'salmon'}}>X</Text>
        </View>

        <View style={[styles.col3, styles.borderBottom]} >
        <Text style={{fontSize:110,color:'#808000'}}>O</Text>
        </View>

      </View>

      
      <View style={styles.row}>
        <View style={[styles.col1, styles.borderRight]} >
        <Text style={{fontSize:110,color:'#808000'}}>O</Text>
        </View>

        <View style={[styles.col2, styles.borderRight]} >
        <Text style={{fontSize:110,color:'#808000'}}>O</Text>
        </View>

        <View style={styles.col3} >
        <Text style={{fontSize:110,color:'salmon'}}>X</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    width: '80%',
    justifyContent:'center',
    alignItems:'center'
  },
  col1: {
    flex: 1,
    height: 150,
    backgroundColor:'#B0E0E6',
    alignItems: 'center'
  },
  col2: {
    flex: 1,
    height: 150,
    backgroundColor:'#B0E0E6',
    alignItems:'center'
  },
  col3: {
    flex: 1,
    height: 150,
    backgroundColor:'#B0E0E6',
    alignItems:'center'
  },
  borderBottom: {
    borderBottomWidth: 4,
    borderBottomColor: '#FDF5E6',
  },
  borderRight: {
    borderRightWidth: 4,
    borderRightColor: '#FDF5E6',
  },
  
});
