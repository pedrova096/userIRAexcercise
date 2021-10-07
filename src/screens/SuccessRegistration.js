import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import Button from 'src/common/components/Button';
import LogoSvg from 'src/common/components/LogoSvg';
import Text from 'src/common/components/Text';
import {REGISTRATION_GROUP} from 'src/navigation/constants';
import {useUserById} from 'src/services/userService';
import styles from './styles/successRegistration.styles';

const SuccessRegistration = ({route: {params}, navigation}) => {
  const data = useUserById(params.id);
  const listData = [
    {
      title: 'Personal Information',
      items: [{label: 'Email', value: data.email}],
    },
    {
      title: 'Location Information',
      items: [
        {label: 'City', value: data.city},
        {label: 'Country', value: data.country},
      ],
    },
    {
      title: 'Contact Information',
      items: [
        {label: 'Day Of Birth', value: data.dayOfBirth},
        {label: 'Mobile', value: data.mobile},
      ],
    },
  ];
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
          renderItem={({item: {items, title}}) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{title}</Text>
              <View style={styles.itemContentContainer}>
                {items.map(m => (
                  <View style={styles.itemContent}>
                    <Text style={styles.itemContentLabel} mode="bold">
                      {m.label}:{' '}
                    </Text>
                    <Text style={styles.itemContentValue}>{m.value}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SuccessRegistration;
