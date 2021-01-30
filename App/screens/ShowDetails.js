import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  NativeModules,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
const {height, width} = Dimensions.get('window');
const {StatusBarManager} = NativeModules;
const {HEIGHT} = StatusBarManager;
export function ShowDetails({navigation, route}) {
  const {item} = route.params;
  console.log(item);
  return (
    <ImageBackground
      source={require('../assets/medic9.jpg')}
      style={{
        width: width,
        height: height,
        // alignItems: 'center',
        // justifyContent: 'center',
      }}>
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
            All Details
          </Text>
        </View>
        <View></View>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: height * 0.9,
        }}>
        <View
          style={{
            width: width * 0.8,
            height: height * 0.6,
            backgroundColor: '#fbf',
            borderWidth: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: width * 0.76,
              height: height * 0.58,
              backgroundColor: '#fff',
              borderWidth: 2,
              //   justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                color: 'white',
                zIndex: 1,
                fontSize: height * 0.03,
                fontWeight: 'bold',
                backgroundColor: 'darkred',
              }}>
              {item.type}
            </Text>
            <View style={{marginTop: height * 0.05, alignItems:'center'}}>
            <View
              style={{
                width: width * 0.3,
                height: width * 0.3,
                backgroundColor: 'gray',
              }}>
                {
                  item.image ?


                  <Image
                    source={item.image ? {uri: item.image} : null}
                    style={{width: width * 0.3, height: width * 0.3}}
                  />
                  :
                  <Text style={{fontSize: height * 0.03, textAlign:'center',paddingTop: height * 0.04, color:'white'}}>No Image</Text>

                }
            </View>
            <View
              style={{
                width: width * 0.6,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Medicine Name:
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: 'gray'}}>
                  {item.medicineName}
                </Text>
              </View>
            </View>

            <View
              style={{
                width: width * 0.6,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Manufacturing Date:
                </Text>
              </View>
              <View>
                {item.manufacturingDate ? (
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'gray'}}>
                    {item.manufacturingDate}
                  </Text>
                ) : (
                  <Text>None</Text>
                )}
              </View>
            </View>

            <View
              style={{
                width: width * 0.6,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Expire Date:
                </Text>
              </View>
              <View>
                {item.expireDate ? (
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'gray'}}>
                    {item.expireDate}
                  </Text>
                ) : (
                  <Text>None</Text>
                )}
              </View>
            </View>

            <View
              style={{
                width: width * 0.6,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Medicine Routine:
                </Text>
              </View>
              <View>
                {item.medicineRoutine ? (
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'gray'}}>
                    {item.medicineRoutine}
                  </Text>
                ) : (
                  <Text>None</Text>
                )}
              </View>
            </View>

            <View
              style={{
                width: width * 0.6,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Precaution:
                </Text>
              </View>
              {item.precaution ? (
                <ScrollView
                  style={{
                    height: 'auto',
                    backgroundColor: 'darkred',
                    borderRadius: 23,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: 'gray',

                      textAlign: 'center',

                      padding: 10,
                      color: '#fff',
                    }}>
                    {item.precaution}
                  </Text>
                </ScrollView>
              ) : (
                <Text>None</Text>
              )}
            </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
