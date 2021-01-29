import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  NativeModules,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useIsFocused} from '@react-navigation/native';
import {MedihealthContext} from './context';
const {width, height} = Dimensions.get('window');
// const dataItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 34];
// const dataItems = [];
const {StatusBarManager} = NativeModules;
const {HEIGHT} = StatusBarManager;
export function DetailsScreen({navigation, route}) {
  const {category} = route.params;
  const {state, setState} = React.useContext(MedihealthContext);
  const dataItems = state[category];
  // const dataItems = []
  const isFocused = useIsFocused();
  const getInitialData = async () => {};
  React.useEffect(() => {
    getInitialData();
  }, [navigation, route, isFocused]);
  const renderItem = ({item, index}) => {
    console.log(item, index, 'item....');
    return (
      <View
        style={{
          flexDirection: 'row',
          width: width,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddDetailsScreen', {index: index, category:category})}
          style={{
            backgroundColor: '#fff',
            padding: height * 0.01,
            width: width * 0.8,
            borderTopEndRadius: 20,
            borderBottomStartRadius: 20,
            height: height * 0.16,
            marginTop: height * 0.02,
            borderWidth: 2,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                height: height * 0.1,
                width: height * 0.1,
                backgroundColor: '#ff9',
                borderWidth: 1,
              }}>
              <Image
                source={item.image ? {uri: item.image} : null}
                style={{height: height * 0.1, width: height * 0.1}}
                resizeMode="stretch"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                shadowColor: '#000000',
                backgroundColor: '#f1fcf0',
                width: width * 0.5,
                alignSelf: 'center',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowRadius: 5,
                shadowOpacity: 1.0,
              }}>
              <View>
                <Text style={{fontSize: 20}}>Name:</Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  {item.medicineName}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'darkred',
              alignItems: 'center',
              padding: 5,
            }}>
            <Text style={{color: 'white'}}>
              mfg Date: {item.manufacturingDate}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setState({
              ...state,
              [category]: state[category].filter((e, idx) => idx !== index),
            })
          }>
          <Icon
            type="ionicon"
            name="ios-trash-bin"
            color="darkred"
            size={height * 0.04}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ImageBackground
      blurRadius={0.4}
      source={require('../assets/medic4.jpg')}
      style={{width: width, height: height}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: HEIGHT,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{alignItems: 'flex-start', paddingLeft: 10}}>
          <Icon
            name="ios-arrow-back-circle-sharp"
            type="ionicon"
            size={height * 0.06}
            color="#000"
          />
        </TouchableOpacity>
        <View style={{borderRadius: 20, padding: 10, backgroundColor: '#fff'}}>
          <Text
            style={{
              fontSize: height * 0.04,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Details
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={{alignItems: 'flex-start', paddingRight: 10}}>
          <Icon
            name="ios-home-sharp"
            type="ionicon"
            size={height * 0.05}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AddDetailsScreen', {category: category})
        }
        style={{
          position: 'absolute',
          bottom: height * 0.05,
          right: width * 0.1,
          zIndex: 5,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
            Add Data
          </Text>

          <Icon type="entypo" name="circle-with-plus" size={height * 0.07} />
        </View>
      </TouchableOpacity>
      {dataItems.length ? (
        <View style={{marginTop: height * 0.05}}>
          <FlatList
            data={dataItems}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={{height: height * 0.7}}
            contentContainerStyle={{alignItems: 'center'}}
          />
        </View>
      ) : (
        <View
          style={{
            height: height * 0.8,
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: width * 0.9,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 5,
              borderRadius: 20,
              height: height * 0.3,
              backgroundColor: '#fef',
            }}>
            <View
              style={{
                width: width * 0.85,
                height: height * 0.27,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 2,
                borderRadius: 20,
                backgroundColor: '#fff',
              }}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                No Data Found click on ({' '}
                <Text style={{fontSize: height * 0.04, fontWeight: 'bold'}}>
                  +
                </Text>{' '}
                ) to Add details{' '}
              </Text>
            </View>
          </View>
        </View>
      )}
    </ImageBackground>
  );
}
