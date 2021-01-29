import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
  FlatList,
  NativeModules,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

const {height, width} = Dimensions.get('window');
const {StatusBarManager} = NativeModules;
const {HEIGHT} = StatusBarManager;
export function CategoriesScreen({navigation}) {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailsScreen',{category: item})}
        activeOpacity={0.5}
        style={{
          padding: height * 0.03,
          borderWidth: 5,
          width: width * 0.6,
          borderTopStartRadius: 20,
          borderBottomStartRadius: 20,
          marginTop: height * 0.04,
          backgroundColor: '#f1fcf0',
          justifyContent: 'space-between',
        }}>
        <View>
          <Icon
            type="entypo"
            name="squared-plus"
            size={height * 0.05}
            color={'darkred'}
          />
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: height * 0.03,
              flexWrap: 'wrap',
            }}>
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ImageBackground
      source={require('../assets/medic6.jpg')}
      style={{width: width, height: height}}>
      {/* <Header/> */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{marginTop: HEIGHT, alignItems: 'flex-start', paddingLeft: 10}}>
        <Icon
          name="ios-arrow-back-circle-sharp"
          type="ionicon"
          size={height * 0.06}
          color="#fff"
        />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: height * 0.04,
            fontWeight: 'bold',
            color: '#fff',
            textShadowOffset: {width: 1, height: 1},
            textShadowRadius: 10,
          }}>
          Categories
        </Text>
        <FlatList
          data={[
            'DailyMedicine',
            'Headache',
            'Fever',
            'Burn',
            'LegPains',
            'Rashes',
            'Alergy',
          ]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          style={{marginTop: height * 0.02}}
          contentContainerStyle={{
            alignItems: 'flex-end',
            paddingBottom: height * 0.2,
          }}
        />
      </View>
    </ImageBackground>
  );
}
