import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, ActivityIndicator, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [showWebView, setShowWebView] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      {showWebView ? (
        <View style={styles.webviewContainer}>

          {loading && (
            <ActivityIndicator
              size="large"
              color="#0000ff"
              style={styles.loader}
            />
          )}
          <WebView
            source={{ uri: 'https://cognisleep.com/' }}
            onLoad={() => setLoading(false)}
            onLoadStart={() => setLoading(true)}
            style={styles.webview}
          />
        </View>
      ) : (
        <View style={styles.content}>
          
          <Button
            title="Cogni Sleep"
            onPress={() => setShowWebView(true)}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -25,
    marginLeft: -25,
    zIndex: 1,
  },
  webview: {
    flex: 1,
    marginTop: 40,
  },
  webviewContainer: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    padding: 10,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
