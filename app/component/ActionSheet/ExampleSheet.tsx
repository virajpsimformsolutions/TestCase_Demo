import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
  useScrollHandlers
} from 'react-native-actions-sheet';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';

function ExampleSheet(props: SheetProps<'example-sheet'>) {
  const handlers = useScrollHandlers();
  return (
    <ActionSheet
      id={props.sheetId}
      safeAreaInsets={{
        top: 0,
        bottom: 100,
        left: 0,
        right: 0
      }}
      isModal={true}
      useBottomSafeAreaPadding
      drawUnderStatusBar={false}
    >
      <ScrollView>
        <Text
          style={{
            marginBottom: 10,
            color: 'black'
          }}
        >
          {props.sheetId}
        </Text>
        <TextInput placeholder="HEllo WORLD" />
        <TextInput placeholder="HEllo WORL" />
        <TextInput placeholder="HEllo WORL" />
        <TextInput placeholder="HEllo WORL" />
        <TextInput placeholder="HEllo WORL" />
        <Button
          title="No"
          onPress={() => {
            SheetManager.hide(props.sheetId, {
              payload: false
            });
          }}
        />
        <Button
          title="Yes"
          onPress={() => {
            SheetManager.hide(props.sheetId, {
              payload: true
            });
          }}
        />
        <TextInput placeholder="HEllo WORL" />

        <Button
          title="No"
          onPress={() => {
            SheetManager.hide(props.sheetId, {
              payload: false
            });
          }}
        />
        <Button
          title="Yes"
          onPress={() => {
            SheetManager.hide(props.sheetId, {
              payload: true
            });
          }}
        />
        <TextInput placeholder="HEllo WORL" />
        <Button
          title="No"
          onPress={() => {
            SheetManager.hide(props.sheetId, {
              payload: false
            });
          }}
        />
        <Button
          title="Yes"
          onPress={() => {
            SheetManager.hide(props.sheetId, {
              payload: true
            });
          }}
        />
        <TextInput placeholder="HEllo WORL" />
        <Button
          title="No"
          onPress={() => {
            SheetManager.hide(props.sheetId, {
              payload: false
            });
          }}
        />
        <Button
          title="Yes"
          onPress={() => {
            SheetManager.hide(props.sheetId, {
              payload: true
            });
          }}
        />
        <TextInput placeholder="HEllo WORL" />
        <Button
          title="No"
          onPress={() => {
            SheetManager.hide(props.sheetId, {
              payload: false
            });
          }}
        />
        <Button
          title="Yes"
          onPress={() => {
            SheetManager.hide(props.sheetId, {
              payload: true
            });
          }}
        />
        <TextInput placeholder="HEllo WORL" />
        <Button
          title="No"
          onPress={() => {
            SheetManager.hide(props.sheetId, {
              payload: false
            });
          }}
        />
        <Button
          title="Yes"
          onPress={() => {
            SheetManager.hide(props.sheetId, {
              payload: true
            });
          }}
        />
        <TextInput placeholder="HEllo WORL" />
      </ScrollView>
    </ActionSheet>
  );
}
export default ExampleSheet;
