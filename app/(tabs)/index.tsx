import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useAuth } from '../../context/googleAuthContext';
import { useEffect } from 'react';

export default function TabOneScreen() {

  const {user, signInWithGoogle} = useAuth();

  useEffect(() => {
		if (!user) {
			signInWithGoogle();
		}
  }, [user]);

  return (
    <View style={styles.container}>
      {user ? <Text style={styles.title}>Welcome, {user.token}</Text> : <Text style={styles.title}>Not signed in</Text>}
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
