import { StatusBar } from 'expo-status-bar';
import{ useState } from 'react'; 
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  const [calcData, setCalcData] = useState({num:20.0,result:null});
  const doCalc=()=>{
    if(isNaN(calcData.num)){
      setCalcData({...calcData,result:"Invalid Input"});
      return;
    }
    const num=calcData.num;
    const sqr=num*num;
    setCalcData({...calcData,result:`Result of ${num} is ${sqr}`});
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput value={calcData.num}keyboardType="numeric" 
      placeholder="Enter a number"
      onChangeText={(data)=>setCalcData({...calcData,num:(data)})}/>
      <Button title="Find Square" onPress={doCalc} />
      <Text>{calcData.result}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
