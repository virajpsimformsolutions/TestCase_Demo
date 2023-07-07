import React, {memo} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import styles from '../../styles';

const CoinItem = ({marketCoin, setTitle, setPrice}: any) => {
  // <------ 2. Import the setPrice function
  const {
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image
  } = marketCoin;

  const percentageColor = price_change_percentage_24h < 1 ? '#ea3943' : '#16c784' || 'white';

  return (
    <Pressable style={styles.coinContainer} onPress={() => setPrice(current_price)}>
      {/* <------ 3. Change View to Pressable and add onPress */}
      <Image source={{uri: image}} style={styles.image} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <View>
          <Text style={styles.title} onPress={() => setTitle(name)}>
            {name}
          </Text>
          <Text>{market_cap_rank}</Text>
          <Text style={{color: percentageColor}}>{price_change_percentage_24h}%</Text>
          <Text style={styles.title}>{current_price}</Text>
        </View>
      </View>
    </Pressable>
  );
};
CoinItem.whyDidYouRender = true;
export default CoinItem;
