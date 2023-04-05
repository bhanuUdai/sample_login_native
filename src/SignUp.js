

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { useNavigation } from '@react-navigation/native';
// //import axios from 'axios';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const navigation = useNavigation();

//   const handleSignup = async () => {
//     // try {
//     //   const response = await axios.post('https://myapi.com/signup', {
//     //     name,
//     //     email,
//     //     password,
//     //   });
//     //   const token = response.data.token;
//     //   // Store the token using AsyncStorage
//     // } catch (error) {
//     //   console.log(error);
//     // }
//   };

//   return (
//     <KeyboardAwareScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Sign up</Text>
//       <TextInput
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry={true}
//         style={styles.input}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSignup}>
//         <Text style={styles.buttonText}>Sign up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         // onPress={() => navigation.navigate('Login')}
//         style={styles.signupLink}>
//         <Text style={styles.signupLinkText}>Already have an account? Login!</Text>
//       </TouchableOpacity>
//     </KeyboardAwareScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 20,
//     width: '80%',
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     width: '80%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   signupLink: {
//     marginTop: 20,
//   },
//   signupLinkText: {
//     color: 'blue',
//   },
// });

// export default Signup;



import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

const Auth = () => {
  const [mode, setMode] = useState('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleModeChange = () => {
    setMode(mode === 'signup' ? 'login' : 'signup');
  };

  const handleSubmit = () => {
    if (mode === 'signup') {
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      // Perform signup logic here
    } else {
      // Perform login logic here
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {mode === 'signup' && (
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      )}
      <Button title={mode === 'signup' ? 'Sign up' : 'Log in'} onPress={handleSubmit} />
      <Button title={mode === 'signup' ? 'Switch to Log in' : 'Switch to Sign up'} onPress={handleModeChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default Auth;
