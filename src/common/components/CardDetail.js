import React from 'react';
import {View} from 'react-native';
import Text from './Text';
import styles from './styles/cardDetail.styles';

const CardDetail = ({title, items = []}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.cardContentContainer}>
        {items.map(m => (
          <View
            key={`item-card-${m.label}-${m.value}`}
            style={styles.cardContent}>
            <Text style={styles.cardContentLabel} mode="bold">
              {m.label}:{' '}
            </Text>
            <Text style={styles.cardContentValue}>{m.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default CardDetail;
