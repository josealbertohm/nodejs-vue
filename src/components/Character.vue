<template>
    <v-layout row wrap>
        <v-flex xs12 v-for="(character, index) in characters" :key='index'>
            <v-card style="marging">
                <v-card-media :src="character.image" height="200px"></v-card-media>
                <v-card-title primary-title>
                    <div>
                        <span class="grey--text">Character number {{index}}</span><br>
                        <div style="text-align: left;"><strong>{{character.full_name}}</strong></div>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat color="orange" :href="character.url" target="_blank">Page</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      characters: [],
      errors: []
    }
  },

  // Fetches characters when the component is created.
  created() {
    axios
      .get('http://204.236.208.220:5000/api/v1.0/characters')
      .then(response => {
        // JSON responses are automatically parsed.
        this.characters = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style>
.button {
  background-color:seagreen;  
  border-radius: 5px;
  color: white;
  font-weight: 600;
  padding: .5em;
  text-decoration: none;
}

.button:focus,
.button:hover {
  background-color:teal;
  color: White;
}
</style>
