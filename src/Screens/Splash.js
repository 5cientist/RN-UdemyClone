import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import Main from './Main';
import {useNavigation} from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 3000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={require('../images/udemy.png')}
        style={{width: 100, height: 100}}
      />
    </View>
  );
}
