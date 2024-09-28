import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';

const Account = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      {/* header */}
      <View
        style={{
          width: '100%',
          height: 55,
          borderBottomWidth: 0.5,
          borderColor: '#8e8e8e',
          justifyContent: 'center',
          alignItems: 'center',

          padding: 10,
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 18,
          }}>
          Account
        </Text>
      </View>
      <Text
        style={{
          marginTop: 30,
          marginLeft: 15,
          fontSize: 15,
        }}>
        Support
      </Text>
      <View>
        <FlatList
          data={[
            {title: 'Udeamy Udeamy', isIcon: true},
            {title: 'Udeamy Udeamy Business', isIcon: true},
            {title: 'Help and Support', isIcon: false},
            {title: 'Share the Udeamy App', isIcon: false},
          ]}
          // data={[1, 1, 1, 1]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  borderBottomWidth: 0.5,
                  borderColor: '#8e8e8e',
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{marginLeft: 15, fontSize: 15, color: 'black'}}>
                    {item.title}
                  </Text>
                  {item.isIcon ? (
                    <Image
                      source={require('../images/next.png')}
                      style={{width: 18, height: 18, marginRight: 10}}
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text
        style={{
          alignSelf: 'center',
          color: '#8000ff',
          fontWeight: '700',
          marginTop: 30,
        }}>
        sign out
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 10,
          color: '#000',
          marginTop: 30,
        }}>
        v .12165241
      </Text>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
