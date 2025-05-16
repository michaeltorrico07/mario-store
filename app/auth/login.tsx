import { Link } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'
const Login = () => {
  return (
    <View>
      <Text>Login</Text>
        <Link href="/shop" asChild>
        <Button title="Ir al profile"/>
      </Link>
    </View>
  )
}

export default Login