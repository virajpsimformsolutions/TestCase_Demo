import React from 'react';
import { Pressable, Text, View } from 'react-native';

const BigListPureComponent = React.memo(({ style }) => {
  console.log("BigList PureComponent Re-Render! - We don't want this to happen too often.");
  return (
    <View style={style}>
      <Text>BigList PureComponent</Text>
      <View>
        {[2, 5, 6, 7, 8, 10, 11, 13].map((n) => (
          <Text key={n}>Element #{n}</Text>
        ))}
      </View>
    </View>
  );
});

const HeaderScroll = () => {
  const [count, setCount] = React.useState(0);

  // const bigListStyle = React.useMemo(() => ({ width: '100%' }), []);
  const bigListStyle = { width: '100%' };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Pressable onPress={() => setCount((c) => c + 1)}>
          <Text>"Increase!" Count: {count}</Text>
        </Pressable>
      </View>
      <BigListPureComponent style={bigListStyle} />
    </View>
  );
};

HeaderScroll.whyDidYouRender = true;

export default HeaderScroll;
