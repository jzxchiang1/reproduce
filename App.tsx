import React, {useCallback, useMemo, useRef} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const App = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <SafeAreaView style={styles.container}>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}>
            <View style={styles.contentContainer}>
              <Text>Awesome 🎉</Text>
            </View>
          </BottomSheetModal>
          <Text>Hello</Text>

          <Button title="hello" onPress={handlePresentModalPress} />
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
