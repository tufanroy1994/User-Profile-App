import React from 'react';
import {View} from 'react-native';
import {StatusBar} from 'react-native';

import {AppColors} from './src/utils';
import {UserDetailsScreen} from './src/screen';

const App = () => {
  return (
    <View>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={AppColors.TRANSPARENT}
      />
      <UserDetailsScreen />
    </View>
  );
};

export default App;
