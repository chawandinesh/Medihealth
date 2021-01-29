import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  NativeModules
} from 'react-native';
const {height, width} = Dimensions.get('window');
const {StatusBarManager} = NativeModules;
const {HEIGHT} = StatusBarManager;
export function HomeScreen(props) {
  const {navigation} = props
  return (
    <ImageBackground
      source={require('../assets/medic33.jpg')}
      resizeMode="cover"
      style={{width: width, height: height}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{marginTop: height * 0.15, marginLeft: width * 0.2}}>
          <Text style={{fontSize: height * 0.06, fontWeight: 'bold', color:'darkred'}}>
            Medihealth
          </Text>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{marginTop: height * 0.1, marginLeft: width * 0.3}}>
          <TouchableOpacity onPress={() => navigation.navigate("CategoriesScreen")}>
            <Text
              style={{
                fontSize: height * 0.04,
                borderRadius: 20,
                borderRightWidth: 5,
                borderTopWidth: 3,
                padding: height * 0.02,
                fontWeight: 'bold',
                backgroundColor: '#8ff',
              }}>
              Add Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ViewAllDetails')}>
            <Text
              style={{
                fontSize: height * 0.04,
                borderRadius: 20,
                padding: height * 0.02,
                marginTop: height * 0.02,
                borderLeftWidth: 4,
                borderBottomWidth: 3,
                fontWeight: 'bold',
                color: '#000',
                backgroundColor: '#8ff',
              }}>
              View Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
