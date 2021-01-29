import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  NativeModules,
} from 'react-native';
import {Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {MedihealthContext} from './context';
const {height, width} = Dimensions.get('window');
const {StatusBarManager} = NativeModules;
const {HEIGHT} = StatusBarManager;
export function AddDetailsScreen({navigation, route}) {
  const {state, setState} = React.useContext(MedihealthContext);
  const {category, index} = route.params;
  // console.log(state,category )
  // const
  const [formData, setFormData] = React.useState({
    medicineName: '',
    manufacturingDate: '',
    expireDate: '',
    medicineRoutine: '',
    precaution: '',
    image: '',
  });

  React.useEffect(() => {
    if (index !== undefined) {
      console.log(state[category], 'from edit');
      setFormData(state[category][index]);
    }
  }, []);
  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setFormData({...formData, image: image.path});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(state, 'state');
  const handleSubmit = () => {
    if (index !== undefined) {
      [...state[category].splice(index, 1, formData)];
      setState(state);
    } else {
      setState({...state, [category]: [...state[category], formData]});
    }

    navigation.goBack();
  };
  return (
    <KeyboardAwareScrollView>
      <ImageBackground
        source={require('../assets/medic2.jpg')}
        resizeMode="cover"
        style={{width: width, height: height}}>
        <View
          style={{
            marginTop: HEIGHT,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 4,
            borderRadius: 10,
            backgroundColor: 'darkred',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{alignItems: 'flex-start', paddingLeft: 10}}>
            <Icon
              name="ios-arrow-back-circle-sharp"
              type="ionicon"
              size={height * 0.06}
              color="#fff"
            />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: 26,
              fontWeight: 'bold',
            }}>
            {' '}
            Add / Update Details
          </Text>
          <Text> </Text>
        </View>
        {/* style={{alignItems: 'center', marginTop: height * 0.05}} */}
        <View style={{alignItems: 'center', marginTop: height * 0.05}}>
          <View
            style={{
              marginTop: 5,
              borderRightWidth: 4,
              backgroundColor: '#ebfcff',
              borderLeftWidth: 4,
              height: height * 0.1,
              padding: height * 0.01,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              width: width * 0.9,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              Medicine Name
            </Text>
            <TextInput
              value={formData.medicineName}
              onChangeText={(text) =>
                setFormData({...formData, medicineName: text})
              }
              style={{
                borderWidth: 1,
                marginTop: 5,
                height: height * 0.05,
                backgroundColor: '#fff',
                borderRadius: 20,
              }}
            />
          </View>

          <View
            style={{
              marginTop: 5,
              borderRightWidth: 4,
              backgroundColor: '#ebfcff',
              borderLeftWidth: 4,
              height: height * 0.1,
              padding: height * 0.01,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              width: width * 0.9,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              Manufacturing Date
            </Text>
            <TextInput
              value={formData.manufacturingDate}
              onChangeText={(text) =>
                setFormData({...formData, manufacturingDate: text})
              }
              style={{
                borderWidth: 1,
                marginTop: 5,
                height: height * 0.05,
                backgroundColor: '#fff',
                borderRadius: 20,
              }}
            />
          </View>

          <View
            style={{
              marginTop: 5,
              borderRightWidth: 4,
              backgroundColor: '#ebfcff',
              borderLeftWidth: 4,
              height: height * 0.1,
              padding: height * 0.01,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              width: width * 0.9,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>Expire Date</Text>
            <TextInput
              value={formData.expireDate}
              onChangeText={(text) =>
                setFormData({...formData, expireDate: text})
              }
              style={{
                borderWidth: 1,
                marginTop: 5,
                height: height * 0.05,
                backgroundColor: '#fff',
                borderRadius: 20,
              }}
            />
          </View>

          <View
            style={{
              marginTop: 5,
              borderRightWidth: 4,
              backgroundColor: '#ebfcff',
              borderLeftWidth: 4,
              height: height * 0.1,
              padding: height * 0.01,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              width: width * 0.9,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              Medicine Routine
            </Text>
            <TextInput
              value={formData.medicineRoutine}
              onChangeText={(text) =>
                setFormData({...formData, medicineRoutine: text})
              }
              style={{
                borderWidth: 1,
                marginTop: 5,
                height: height * 0.05,
                backgroundColor: '#fff',
                borderRadius: 20,
              }}
            />
          </View>

          <View
            style={{
              marginTop: 5,
              borderRightWidth: 4,
              backgroundColor: '#ebfcff',
              borderLeftWidth: 4,
              height: height * 0.15,
              padding: height * 0.01,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              width: width * 0.9,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>Precaution</Text>
            <TextInput
              value={formData.precaution}
              onChangeText={(text) =>
                setFormData({...formData, precaution: text})
              }
              multiline
              numberOfLines={4}
              style={{
                borderWidth: 1,
                marginTop: 5,
                height: height * 0.1,
                backgroundColor: '#fff',
                borderRadius: 20,
              }}
            />
          </View>

          <View
            style={{
              width: width * 0.9,
              alignItems: 'center',
              height: height * 0.2,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={pickImage}
              style={{
                width: height * 0.15,
                height: height * 0.15,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                borderRadius: 20,
                borderWidth: 2,
              }}>
              {formData.image.length ? (
                <Image
                  source={{uri: formData.image}}
                  style={{
                    height: height * 0.15,
                    width: height * 0.15,
                    borderRadius: 20,
                  }}
                />
              ) : (
                <View>
                  <Icon type="entypo" name="plus" size={height * 0.06} />
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                    Add Image
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={{
                marginRight: 10,
                backgroundColor: '#fff',
                width: width * 0.4,
                padding: 10,
                backgroundColor: 'darkgreen',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#fff',
                }}>
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}
