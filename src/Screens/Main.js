import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Feature from '../tabs/Feature';
import Search from '../tabs/Search';
import MyLearning from '../tabs/MyLearning';
import Whishlist from '../tabs/Whishlist';
import Account from '../tabs/Account';

const Main = () => {
  const [selectedTab, SetSelectedTab] = useState(0);
  return (
    <View style={{flex: 1}}>
      {selectedTab == 0 ? (
        <Feature />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <MyLearning />
      ) : selectedTab == 3 ? (
        <Whishlist />
      ) : (
        <Account />
      )}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          elevation: 5,
          height: 60,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            SetSelectedTab(0);
          }}
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={
              selectedTab == 0
                ? require('../images/star-filled.png')
                : require('../images/star.png')
            }
            style={{width: 24, height: 24}}
          />
          <Text>Featured</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            SetSelectedTab(1);
          }}
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={
              selectedTab == 1
                ? require('../images/search-filled.png')
                : require('../images/search.png')
            }
            style={{width: 24, height: 24}}
          />
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            SetSelectedTab(2);
          }}
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={
              selectedTab == 2
                ? require('../images/play-Filled.png')
                : require('../images/play.png')
            }
            style={{width: 24, height: 24}}
          />
          <Text>My Learning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            SetSelectedTab(3);
          }}
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={
              selectedTab == 3
                ? require('../images/whishlist-filled.png')
                : require('../images/whishlist.png')
            }
            style={{width: 24, height: 24}}
          />
          <Text>Whishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            SetSelectedTab(4);
          }}
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={
              selectedTab == 4
                ? require('../images/user-filled.png')
                : require('../images/user.png')
            }
            style={{width: 24, height: 24}}
          />
          <Text>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
