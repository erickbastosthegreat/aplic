import CustomButton from "@/components/Title";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";
import Form from "@/components/Form";

export default function HomeScreen(){
    const name = "Ele";
    const router = useRouter();
    const [count, setCount] = useState(0);
    const [nome, setNome] = useState(name);
    const STARVALUE = 0;

    return(
        <View>
            <Button 
            title="Stack navigation" 
            onPress={() => router.push('/navigation/stack')}
            />
            <Button 
            title="Tabs navigation" 
            onPress={() => router.push('/navigation/tabs')}
            />
            <Button 
            title="Drawer navigation" 
            onPress={() => router.push('/navigation/drawer')}
            />
        </View>
    );


    function alterarCount (value:number){
        setCount(count + value);
    }


    return (
        <View style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
            <Text>Bem vindo, {nome} </Text>

            <Text>Contador: {count}</Text>
            <Button title="Jogar!" onPress={() => {alterarCount(+1)}}/> 
            <Button title="Diminuir" onPress={() => {alterarCount(-1)}}/> 
            <Button title="Reset" onPress={() => {setCount(STARVALUE)}}/>

            <TextInput placeholder="digita ai mano" onChangeText={setNome}/>
           <CustomButton title="Bota Vermeia" onPress={() => {setNome('Ele ' + count)}}/>


           
            <TextInput placeholder="Nome"/>
            <CustomButton title="Login" onPress={() => {setNome('Ele ' + count)}}/>
            
            <Form/>  
        </View>
    );

}