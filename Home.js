import React, { useState } from "react";
import { 
     View,
     Text,
     StyleSheet,
     TextInput,
     TouchableOpacity
     } from "react-native";

export  function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill(){
    setMySkills(oldState => [...oldState, newSkill] );
  }

  return( 
    <View style={styles.container}>
      <Text style={styles.title}>
        Projeto React
      </Text>
      <TextInput
          style={styles.input}
          placeholder='New Skill'
          placeholderTextColor='#555'
          onChangeText={setNewSkill}
      />
      <TouchableOpacity
       style={styles.button}
       activeOpacity={0.4}
       onPress={handleAddNewSkill}
       >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginVertical: 50 }]}>
        My Skill
      </Text>
      { 
          mySkills.map(skill =>(
          <TouchableOpacity key={skill} style={styles.buttonSkill}> 
           <Text style={styles.textSkill}>
            {skill}
           </Text>
          </TouchableOpacity> 
          ))
      } 

    </View>    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // justifyContent: 'center', 
       // alignItems: 'center',
        backgroundColor: '#121015'
    },
    title: {
        color:'#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: 8,
        marginTop: 30,
        borderRadius: 8
    },
    button: {
        backgroundColor: '#A370F7',
        padding: 11,
        borderRadius: 7,
        alignItems: 'center'    
    },
    buttonText:{
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
        
    },
    buttonSkill:{
        backgroundColor: '#1F1E25',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 10
    },
    textSkill:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',

    }

});
