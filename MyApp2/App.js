import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View, Text, Image } from 'react-native'; 
import { Images } from './Images';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{ alignItems: "center", justifyContent: "center", margin: 5 }}>
        <Text>Hello at the top</Text>
      </View>

      <FlatList
        data={Images}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center", justifyContent: "center", margin: 5 }}>
            <Image
              style={{ width: 150, height: 150 }}
              source={{ uri: item.image }}
            />
            <Text>Hello under each image</Text>
          </View>
        )}
      />
      
      <View style={{ alignItems: "center", justifyContent: "center", margin: 5 }}>
        <Text>Hello at the bottom</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


