import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import Weather from "../components/Weather";

const availableZipItems = [
  { place: "Hatyai", code: "90110" },
  { place: "Trang", code: "92000" },
  { place: "Chiangmai", code: "50000" },
  { place: "Khonkaen", code: "40000" },
  { place: "Chonburi", code: "20000" },
];
const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={()=> navigation.navigate('Weather',{zipCode: code })}>
  <View style = {styles.zipItem}>
    <Text>{place}</Text>
    <Text>{code}</Text>
  </View>
  </TouchableHighlight>
);
const _keyExtractor = item => item.code;
export default function ZipCodeScreen() {
    const navigation = useNavigation()
  return (
    <View style={styles.box}>
       <View style={styles.box}>
    <FlatList
      data={availableZipItems}
      keyExtractor={(item) => item.code}
      renderItem={({ item }) => <ZipItem {...item} navigation = {navigation} />}
    />
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    ZipPlace: {
        flex: 1,
    
    },
    ZipCode: {
        flex: 1,
    },
    box: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      width: '100%',
      height: '100%',
  },
  box: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '100%',
    height: '100%',
}

})
