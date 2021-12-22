  var text1="Titolo";
  var text2="Prezzo";
  var text3 = "Valutazione";
  var message= " ";


  const catalogo = {
    template: `
    <div>
    <div>
    <button type="button"
    class="btn btn-primary m-2 fload-end"
    @click="Ricerca(message)">
     Search
    </button>
    <input v-model="message" placeholder="edit me" >
    

    </div>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            Titolo
        </th>
        <th>
            Venditore
        </th>
        <th>
            Prezzo
        </th>
        <th>
            Valutazione
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="lib in libri">
        <td>{{lib.Titolo}}</td>
        <td>{{lib.Venditore}}</td>
        <td>{{lib.Prezzo}}</td>
        <td>{{lib.Valutazione}}</td>
        <td><button type="button"
        class="btn btn-primary m-2 fload-end"
        @click="Elimina(lib.idLibro)">
         Elimina
        </button></td>
    </tr>
</tbody>
</thead>
</table>
<div>
    <button type="button"
    class="btn btn-primary m-2 fload-end"
    @click="Filtro('Titolo')">
     Filtro per Titolo
    </button>
    <button type="button"
    class="btn btn-primary m-2 fload-end"
    @click="Filtro('Valutazione')">
     Filtro per Valutazione
    </button>
    <button type="button"
    class="btn btn-primary m-2 fload-end"
    @click="Filtro('Prezzo')">
     Filtro per Prezzo
    </button>
    <button type="button"
    class="btn btn-primary m-2 fload-end"
    @click="Filtro('default')">
     Default
    </button>
    </div>



</div>
  `,
  
    data() {
      return {
        libri: [],
        _id:'',
        idLibro:'',
        Titolo: '',
        Autore: '',
        Materia: '',
        Valutazione: '',
        Venditore: '',
        Prezzo: '',
        ISBN:'',
        Casa_editrice:'',
        Libro_universitario:''
      }
    },
    methods: {
      fetchData() {
        axios.get(variables.API_URL + "libri")
          .then((response) => {
            this.libri = response.data;
          });
      },
      addClick() {
        this.modalTitle = 'Add employee';
        this.name = '',
          this.surname = '',
          this.email = '',
          this.dateOfBirth = ''
      },
      Elimina(params) {
        axios.delete(variables.API_URL + "libri/"+params)
        .then((response)=>{
          this.libri = this.fetchData();
        })
      },
      Filtro(params) {
        axios.get(variables.API_URL + "libri/filtro/"+params)
        .then((response) => {
          this.libri = response.data;
        });
      },
      Ricerca(params){
        axios.get(variables.API_URL + "libri/search/"+params)
        .then((response) => {
          this.libri = response.data;
        });
      }
    },
    mounted: function () {
      this.fetchData();
    }
  
  }
  

 
