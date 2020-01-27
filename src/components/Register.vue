<template>
  <div class="signin">
    <form @submit.prevent="submitForm()">

    <span class="title">First name, Last Name</span>
    <input v-model="name" :size="25" placeholder="Name" required>
    
    <p><span class="title">Email</span>
    <input :type="text" :size="25" 
      v-model="email" 
      @blur="checkEmail()"
      @focus="emailError = false" 
      placeholder="example@example.com" required>
    <span  class="text-danger" v-if="emailError">It is not email</span></p>
        
    <p><span class="title">Password</span>
    <input type="password" :size="25" 
    v-model="pass"
    @blur="checkPassword()"
    @focus="passError = false"  
    placeholder="Password" required>
    <span  class="text-danger" v-if="passError">Password is too short</span></p>
    
    <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: null,
      pass: null,
      name: null,
      resp: null,
      err: null,
      emailError: false, 
      passError: false, 
    }
  },
  methods: {
    submitForm() {
      axios.post('localhost:8088',
      {'email': this.email, 'password': this.pass, 'first_name': this.name, 'language': 'en'} )
      .then(response => {this.resp = response})
      .catch(error => {this.err = error})
    },
    checkEmail() {
      var emailRegex = /.+@.+\..+/i;
      this.emailError = ! emailRegex.test(this.email);
    },
    checkPassword() {
      this.pass.length < 6 ? this.passError = true : this.passError = false
    }
  }
}
</script>

<style>
.signin {
  max-width: 20em;
  height: 20em;
  border: 1px solid lightgray;
  margin: auto auto;
  padding: 2em 0.5em 0 3em;
  background-color: lightcyan;
}
form span {
  display: block;
  line-height: 1.5em;
}
.text-danger {
  color: red;
  font-size: 0.9em;
}
.invisible {
  display: none;
}
</style>