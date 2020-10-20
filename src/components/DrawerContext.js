import React, { useContext } from 'react'
import { StyleSheet, View , Text} from 'react-native'
import appContext from "../context";

const DrawerContent = () => {
    const AppContext = useContext(appContext);
    const { user } = AppContext;
    return (
        <View style={styles.container}>
            <Text>{user.name}</Text>
            <Text>{user.code}</Text>
            <Text>{user.school}</Text>
            <Text>{user.career}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderWidth: 2,
    },
  });

export default DrawerContent;