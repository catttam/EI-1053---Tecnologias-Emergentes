Vue.use(VueMaterial.default)

window.app  = new Vue({
    el: '#app',
    data: {
      id: 1,
      name: '',
      passwd: null,
      birthday: '',
      email: '',
      profileImg: [],
      client_data:'Aun no hay datos',
      client_id: null,
      logged: false,
    },

    created(){
      var stream = new EventSource('/spam');

     /*  console.log("Event source created")
      stream.onmessage = function(event){
        console.log('Hasta aquí hemos llegado')
        console.log(event.data)
        window.alert(event.data)
      }; */
        stream.addEventListener('logged', event => {
        console.log('Hasta aquí hemos llegado')
        console.log(event.data)
        window.alert(event.data)
      }, false); 
    },

    computed:{
        alertClientNull(){
          return this.client_data
        }
    },
    methods:{
      createClient(formData){
        console.log('create client function uwu');
        let subs = []
        let self = this
        let user = {id: 1, mail: this.email, birthday: this.birthday, passwd: this.passwd, name: this.name, profileImg: this.profileImg.name, subscriptions: subs}
        //Inyectamos usuarios actuales en la componente Vuw
        let url = '/user/client'
        fetch(url, {method: 'POST',
                      body: JSON.stringify(user),
                      headers:{
                        'Content-Type': 'application/json'
                      }
                    })
                      .then(function(r){
                        return r.json()
                      })
                      .then(function(j){
                        console.log('User created:: ',j.result)
                      });        
        },
      getClient(){
        let url= '/user/' + this.client_id
        console.log(url)
        fetch(url)  
        .then(function(r){
            return r.json()
        }).then(function(j){
            console.log(j.result)
            this.client_data=j.result;
        });
      },
    },
  });