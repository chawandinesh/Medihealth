import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Dimensions,
  Image,
  NativeModules,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {MedihealthContext} from '../screens/context';
const {height, width} = Dimensions.get('window');
const {StatusBarManager} = NativeModules;
const {HEIGHT} = StatusBarManager;
export function ViewAllDetails({navigation}) {
  const {state} = React.useContext(MedihealthContext);
  const [dataItems, setDataItems] = React.useState([]);
  const allKeys = Object.keys(state);
  const allData = Object.values(state);
  console.log(allKeys, allData);
  let mArray = [];
  React.useEffect(() => {
    allKeys.map((key) => {
      state[key].map((e) => {
        mArray.push({...e, type: key});
      });
    });
    setDataItems(mArray);
  }, []);

  console.log(dataItems);
  const renderItem = ({item, index}) => {
    console.log(item, index, 'item....');

    return (
      <View
        style={{
          flexDirection: 'row',
          width: width,
          alignItems: 'center',
        //   justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ShowDetails', {
             item: item
            })
          }
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
          style={{
            transform: [{rotate: '270deg'}],
            backgroundColor: '#fff',
            width: width * 0.3,
            alignItems: 'center',
            borderRadius: 10,
          }}
          onPress={() =>
            setState({
              ...state,
              [category]: state[category].filter((e, idx) => idx !== index),
            })
          }>
          <Text style={{fontWeight: 'bold', fontSize: height * 0.02}}>
            {item.type}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ImageBackground
      source={require('../assets/medic8.jpg')}
      style={{width: width, height: height}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{marginTop: HEIGHT, alignItems: 'flex-start', paddingLeft: 10}}>
        <Icon
          name="ios-arrow-back-circle-sharp"
          type="ionicon"
          size={height * 0.06}
          color="#000"
        />
      </TouchableOpacity>
      <View >
        <Text
          style={{
            textAlign: 'center',
            fontSize: height * 0.04,
            fontWeight: 'bold',
            color: '#000',
            textShadowOffset: {width: 1, height: 1},
            textShadowRadius: 10,
          }}>
          Categories
        </Text>
        {dataItems.length ? (
          <FlatList
            data={dataItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            style={{marginTop: height * 0.02}}
            contentContainerStyle={{
              alignItems: 'center',

              paddingBottom: height * 0.2,
              
            }}
          />
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
                  ) on Add details to add the data{' '}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}
