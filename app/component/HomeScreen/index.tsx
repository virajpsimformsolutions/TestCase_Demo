import React, {Profiler, useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, View, Text, Pressable} from 'react-native';
import CoinItem from './components/CoinItem';
import coins from './coins.json';
import styles from './styles';
// import {killJSThread, killUIThread} from 'react-native-flipper-performance-plugin';

const HomeScreen = () => {
  const [isGreen, setIsGreen] = useState(false);
  const [title, setTitle] = useState('Cryptoassets');
  const [price, setPrice] = useState(0);
  // const [memoizedPrice, setMemoizedPrice] = useState(0);

  const memoizedCallback = useCallback((name: React.SetStateAction<string>) => {
    for (let i = 0; i <= 10000000; i++) {}
    setTitle(name);
  }, []);

  const multipliedPrice = () => {
    for (let i = 0; i <= 100000; i++) {
      setIsGreen(!isGreen);
    } // This piece of code is here to make the function expensive
    return price;
  };

  // useEffect(() => {
  //   price && multipliedPrice();
  // }, [price]);
  const memoizedPrice = useMemo(() => multipliedPrice(), [price]); // <------ 2. Create a memoized function.
  const onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    console.log('id', id, phase, actualDuration, baseDuration, startTime, commitTime);
  };

  return (
    <View>
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Pressable style={[styles.coinContainer]}>
          <Text style={[styles.title, { color: isGreen ? '#16c784' : 'red' }]}>{title}</Text>
        </Pressable>
        <Text style={styles.title}>{memoizedPrice}</Text>
      </View>
      <FlatList
        data={coins}
        renderItem={({ item }) => (
          <Profiler id="CoinItem" onRender={onRender}>
            <CoinItem marketCoin={item} setTitle={memoizedCallback} setPrice={setPrice} />
          </Profiler>
        )}
      />
    </View>
  );
};
HomeScreen.whyDidYouRender = true;
export default HomeScreen;
