Vue.use(VueMaterial.default)

window.app  = new Vue({
    el: '#app',
    data: {
      /* client */
      id: 1,
      name: '',
      passwd: null,
      birthday: '',
      email: '',
      profileImg: [],
      client_data:[],
      client_id: null,
      logged: false,

       /* sheet */
      sheetName: '',
      sheetAuthor: '',
      sheet: [],
      public: true,
      sheetSource: '',
      genres: [],
      instruments: [],
      newSheet: false,
      fields: [],
      items: [],

    },

    created(){
      var self = this
      var stream = new EventSource('/spam');
      
     /*  console.log("Event source created")
      stream.onmessage = function(event){
        console.log('Hasta aquí hemos llegado')
        console.log(event.data)
        window.alert(event.data)
      }; */

        stream.addEventListener('new-sheet', event => {
        var sheetData = JSON.parse(JSON.parse(event.data))
        self.newSheet = true
        console.log(self.newSheet)
      }, false); 

    },     
    


    methods:{
      createClient(formData){
        console.log('create client function uwu');
        console.log(this.profileImg)
        let subs = []
        let self = this
        let user = {id: 1, mail: this.email, birthday: this.birthday, passwd: this.passwd, 
                    name: this.name, profileImg: this.profileImg.name, subscriptions: subs}
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
        let self = this
        console.log(url)
        fetch(url)  
        .then(function(r){
            return r.json()
        }).then(function(j){
            console.log(j.result)
            self.client_data.push(j.result);
        });
      },
      insertSheet(formData){
        console.log("Sheet name =>",this.sheetName)
        console.log(this.sheet)
        var formData = new FormData()
        let self = this
        let sheetData = {id: 1, name: this.sheetName, sheet: this.sheet.name, 
                    author: this.sheetAuthor, public: this.public, source: this.sheetSource,
                    creationDate: new Date, genres: this.genres, instruments: this.instruments}
        
        formData.append('file',this.sheet)
        formData.append('data',sheetData)  

        for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
        }   

        let url = '/sheet/new'
        fetch(url, {method: 'POST',
                      body: JSON.stringify(sheetData),
                      headers:{
                        'Content-Type': 'application/json'
                      }
                    })
                      .then(function(r){
                        return r.json()
                      })
                      .then(function(j){
                        console.log('Sheet added:: ',j.result)
                      });        
        },
    },
  });
  