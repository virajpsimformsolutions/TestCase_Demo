import React from 'react';
import { View } from 'react-native';
import { TreeDataTypes, TreeSelect } from 'react-native-tree-selection';

const TreeSelection = () => {
  const treeData: TreeDataTypes[] = [
    {
      id: '1',
      title: 'Fruits',
      data: [
        {
          title: 'Apples',
          data: [
            {
              title: 'Red Delicious'
            },
            {
              title: 'Granny Smith'
            },
            {
              title: 'Gala'
            }
          ]
        },
        {
          title: 'Bananas',
          data: [
            {
              title: 'Cavendish'
            },
            {
              title: 'Lady Finger'
            }
          ]
        }
      ]
    }
  ];
  return (
    <View>
      <TreeSelect
        data={treeData}
        // childKey="data"
        // titleKey="title"
        // onParentPress={() => {}}
        // onChildPress={() => {}}
        // onCheckBoxPress={() => {}}
      />
    </View>
  );
};
TreeSelection.whyDidYouRender = true;
export default TreeSelection;
