import addNewFilm from '../components/addNewFilm.js'

export default {
    components: {
        addNewFilm
    },
    template: `
    <div>
    <addNewFilm />

    <button @click="quitUser">Cancel membership</button>
        <label>Enter your user id :</label><br>
        <input v-model="user_id" required type="id" placeholder="user_id..."><br>
        
    </div>
    `
    ,
    data() {
        return {
        user_id: '',
        }
    },
    methods: {
        async quitUser() {
          let response = await fetch("/users/"+ this.user_id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: this.user_id
          });
     
            this.$store.state.users
            console.log('Successfully resigned your membership')
     
            }
        }
    }

