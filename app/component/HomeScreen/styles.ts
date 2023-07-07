import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    backgroundColor: 'red'
  },
  coinContainer: {
    padding: 16,
    flexDirection: 'row',
    alignContent: 'space-between'
  },
  image: {
    margin: 16,
    height: 50,
    width: 50
  },
  title: {
    height: 30
  },
  inputStyles: {
    textAlignVertical: 'top'
  },
  infoContainer: {
    paddingVertical: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 3
  },
  rightContainer: {
    alignSelf: 'center'
  },
  subText: {
    fontWeight: '400',
    paddingTop: 15
  },
  socialLinkContainer: {
    flexDirection: 'row'
  },
  socialLinkFlatList: {
    flex: 1
  },
  tagsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
});

export default styles;
