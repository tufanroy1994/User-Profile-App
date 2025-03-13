import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {
  BaseButton,
  BaseButton2,
  BaseFormInput,
  BaseText,
} from '../../components';
import {AppStrings} from '../../utils';
import {axiosClient} from '../../config/Axios';
import {ApiEndpoints} from '../../config/ApiConstants';
import {styles} from './styles';

type UserType = {
  id: number;
  uid: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
};

const UserDetailsScreen = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axiosClient.get(ApiEndpoints.USER_DATA);
      setUsers(response.data);
      setCurrentIndex(0);
    } catch (error) {
      console.error('Error fetching users', error);
    } finally {
      setLoading(false);
    }
  };

  const nextUser = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else {
      fetchUsers();
    }
  };

  const prevUser = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (users.length === 0) {
    return (
      <View style={styles.container}>
        <BaseText>No user available.</BaseText>
      </View>
    );
  }

  const user = users[currentIndex];

  return (
    <View style={styles.contentContainer}>
      <Image source={{uri: user.avatar}} style={styles.image} />
      <BaseFormInput
        title={AppStrings.id}
        value={user.id.toString()}
        editable={false}
      />
      <BaseFormInput title={AppStrings.uid} value={user.uid} editable={false} />
      <BaseFormInput
        title={AppStrings.first_name}
        value={user.first_name}
        editable={false}
      />
      <BaseFormInput
        title={AppStrings.last_name}
        value={user.last_name}
        editable={false}
      />
      <BaseFormInput
        title={AppStrings.username}
        value={user.username}
        editable={false}
      />
      <BaseFormInput
        title={AppStrings.email}
        value={user.email}
        editable={false}
      />
      <BaseFormInput
        title={AppStrings.password}
        value={user.password}
        editable={false}
      />

      <View style={styles.buttonContainer}>
        <BaseButton2
          title={AppStrings.preview}
          onPress={prevUser}
          disabled={currentIndex === 0}
        />
        <BaseButton title={AppStrings.next} onPress={nextUser} />
      </View>
    </View>
  );
};

export default UserDetailsScreen;
