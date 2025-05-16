import React from 'react';
import { useRouter } from 'expo-router';
import { View, Button } from 'react-native';

export default function StackHome(){
    const router = useRouter();
 
    return (
        <View>
            Tela Inicial

            <Button title='Ir para detalhes' onPress={() => router.push('/navigation/stack/detail')}/>
        </View>
    );
}