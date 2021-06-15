const app = Vue.createApp({
    data() {
        return {
            firstName:'Usman',
            LastName:'Siddiqui',
            email:'usman@nisum.com',
            gender:'male',
            picture:'https://randomuser.me/api/portraits/men/23.jpg'

        }
    },
    methods:{
        async getUser(){
            const res= await fetch('https://randomuser.me/api')
            const { results }= await res.json()
            console.log(results[0])

            this.firstName=results[0].name.first,
            this.LastName=results[0].name.last,
            this.email=results[0].email,
            this.gender=results[0].gender,
            this.picture=results[0].picture.large
        }
    }
})

app.mount('#app')