import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import Button from 'src/common/components/Button';
import LogoSvg from 'src/common/components/LogoSvg';
import Text from 'src/common/components/Text';
import CardDetail from 'src/common/components/CardDetail';
import {REGISTRATION_GROUP} from 'src/navigation/constants';
import {useUserById} from 'src/services/userService';
import styles from './styles/successRegistration.styles';
import {dataToCardItems} from 'src/utility';

const SuccessRegistration = ({route: {params}, navigation}) => {
  const data = useUserById(params.id);
  const listData = dataToCardItems(data, false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <LogoSvg />
        <Text center style={styles.fullNameTitle}>
          The user
          <Text
            style={
              styles.fullName
            }>{`\n${data.firstName} ${data.lastName}\n`}</Text>
          has successfully register
        </Text>
        <FlatList
          data={listData}
          keyExtractor={({title}) => `data-item-${title}`}
          style={styles.list}
          ListFooterComponent={
            <View>
              <Button
                fullWidth
                text="Register another"
                style={styles.registerButton}
                onPress={() => navigation.navigate(REGISTRATION_GROUP)}
              />
              <Button fullWidth text="Check registered users" mode="outline" />
            </View>
          }
          renderItem={({item}) => <CardDetail {...item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default SuccessRegistration;
