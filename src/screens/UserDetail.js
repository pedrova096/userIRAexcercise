import React from 'react';
import {FlatList} from 'react-native';
import Button from 'src/common/components/Button';
import CardDetail from 'src/common/components/CardDetail';
import {REGISTRATION_GROUP} from 'src/navigation/constants';
import {useUserById} from 'src/services/userService';
import {dataToCardItems} from 'src/utility';
import styles from './styles/usersRegistered.styles';

const UserDetail = ({route: {params}, navigation}) => {
  const data = useUserById(params.id);
  const listData = dataToCardItems(data);
  return (
    <FlatList
      data={listData}
      keyExtractor={({title}) => `data-item-${title}`}
      style={styles.list}
      ListFooterComponent={
        <Button
          fullWidth
          text="Edit user"
          mode="outline"
          onPress={() => navigation.navigate(REGISTRATION_GROUP, {data})}
        />
      }
      contentContainerStyle={styles.listContentContainer}
      renderItem={({item}) => <CardDetail {...item} />}
    />
  );
};

export default UserDetail;
