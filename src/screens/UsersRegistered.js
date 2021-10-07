import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import LogoSvg from 'src/common/components/LogoSvg';
import Text from 'src/common/components/Text';
import {colors} from 'src/constants/theme';
import {USER_DETAIL} from 'src/navigation/constants';
import {useUserQueryHandler, useUsers} from 'src/services/userService';
import styles from './styles/usersRegistered.styles';

const LoaderCard = () => (
  <View style={[styles.itemContainer, styles.loaderContainer]}>
    <LogoSvg />
    <View style={styles.loaderContent}>
      <Text mode="bold" style={styles.loaderText}>
        Loading{' '}
      </Text>
      <ActivityIndicator color={colors.primary} />
    </View>
  </View>
);

const UsersRegistered = ({navigation}) => {
  const {data = [], isLoading} = useUsers();
  const userHandler = useUserQueryHandler();
  const handleItemClick = (id, index) => () => {
    userHandler.setUserData(id, old => ({...old, ...data[index]}));
    navigation.navigate(USER_DETAIL, {id});
  };
  return (
    <FlatList
      data={data}
      style={styles.list}
      contentContainerStyle={styles.listContentContainer}
      ListEmptyComponent={isLoading && <LoaderCard />}
      keyExtractor={({id}) => `UsersRegistered-${id}`}
      renderItem={({
        item: {firstName, lastName, email, city, mobile, id},
        index,
      }) => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.itemContainer}
          onPress={handleItemClick(id, index)}>
          <Text style={styles.itemLabel}>Full Name</Text>
          <Text mode="bold" style={styles.itemFullName} numberOfLines={1}>
            {`${firstName} ${lastName}`}
          </Text>
          <View style={styles.hr} />
          <Text style={styles.itemLabel}>Email</Text>
          <Text mode="bold" numberOfLines={1}>{`${email}`}</Text>
          <Text style={styles.itemLabel}>City</Text>
          <Text mode="bold" numberOfLines={1}>{`${city}`}</Text>
          <Text style={styles.itemLabel}>Mobile</Text>
          <Text mode="bold" numberOfLines={1}>{`${mobile}`}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default UsersRegistered;
