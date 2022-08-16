import { Image,ImageBackground,StyleSheet, Text, View } from "react-native";

export default function Shoes( { navigation } ) {
  return (
    <View style={styles.comtainer2}>
    
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Shoes</Text>
    
    <Text> Fetch Image Sample</Text>
      <Image style={styles.image}
        source={{
        uri: 'https://firebasestorage.googleapis.com/v0/b/test-86b07.appspot.com/o/39250F4B-30F9-40A4-8292-53880BF49155.jpg?alt=media&token=7593004c-d443-4ea6-804c-d1eed1974b14'
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  comtainer2: {
    flex: 1, alignItems: 'center', 
    
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 15,
  }
})