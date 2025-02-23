The solution is to ensure that the `keyExtractor` function in your `FlatList` component always returns a unique key for each item. You can use a library like `uuid` to generate unique identifiers if your data doesn't already have them.  Here's how you can fix the code:

```javascript
import {FlatList, Text, View} from 'react-native';
import uuid from 'react-native-uuid'; // Install: expo install react-native-uuid or yarn add react-native-uuid

const data = [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }];

const App = () => {
  const fixedData = data.map((item, index) => ({...item, id: uuid.v4()}));

  return (
    <View>
      <FlatList
        data={fixedData}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id} 
      />
    </View>
  );
};

export default App;
```

This revised code ensures each item has a unique `id` generated using `uuid.v4()`, preventing the key duplication issue.  Remember to install `react-native-uuid`.