/*const app = document.getElementById('root');



const container = document.createElement('div');
container.setAttribute('class', 'container');

var f = document.createElement("form");
f.setAttribute('class', 'container');
f.setAttribute('method', "post");
f.setAttribute('action','http://localhost:49146/api/libri/search/:titolo');



var i = document.createElement("input");
i.type = "text";
i.name = "titolo_libro";
i.id = "titolo";

var s = document.createElement("input");
s.type="submit";
s.value="Search";

f.appendChild(i);
f.appendChild(s);

app.appendChild(f);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:49146/api/libri', true);
request.onload = function () {


    if (request.status >= 200 && request.status < 400) {

        var data = JSON.parse(this.response);
        data.forEach(libro => {
            
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = libro.Titolo;

            container.appendChild(card);
            card.appendChild(h1);
        }
            )
        card.appendChild(h1);
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `THE API IS NOT WORKING!`;
        app.appendChild(errorMessage);
    }

}


request.send();


Vue.component('product', {
    props: {
      premium: {
        type: Boolean,
        required: true
      }
    },
    template: `
     <div class="product">
        <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
  
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>
  
            <div class="color-box"
                 v-for="(variant, index) in variants" 
                 :key="variant.variantId"
                 :style="{ backgroundColor: variant.variantColor }"
                 @mouseover="updateProduct(index)"
                 >
            </div> 
  
            <button v-on:click="addToCart" 
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }"
              >
            Filtro
            </button>
  
         </div>  
      
      </div>
     `,
    data() {
      return {
          
          /*product: 'Socks',
          brand: 'Vue Mastery',
          selectedVariant: 0,
          details: ['80% cotton', '20% polyester', 'Gender-neutral'],
          variants: [
            {
              variantId: 2234,
              variantColor: 'green',
              variantImage: './assets/vmSocks-green.jpg',
              variantQuantity: 10     
            },
            {
              variantId: 2235,
              variantColor: 'blue',
              variantImage: './assets/vmSocks-blue.jpg',
              variantQuantity: 0     
            }
          ]
      }
    },
      methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index) {  
            this.selectedVariant = index
        }
      },
      computed: {
          title() {
              return this.brand + ' ' + this.product  
          },
          image(){
              return this.variants[this.selectedVariant].variantImage
          },
          inStock(){
              return this.variants[this.selectedVariant].variantQuantity
          },
          shipping() {
            if (this.premium) {
              return "Free"
            }
              return 2.99
          }
      }
  })
  
  var app = new Vue({
      el: '#app',
      data: {
        premium: true,
        cart: []
      },
      methods: {
        updateCart(id) {
          this.cart.push(id)
        }
      }
  })*/

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
      /*createEmployee() {
        //@TODO qui non funziona, scegli tipologia di dato con cui fare calcoli
        if (this.DateOfBirth < new Date().toLocaleString() - 18) {
          axios.post(variables.API_URL + "/employee", {
            name: this.name,
            surname: this.surname,
            email: this.email,
            passwordHash: this.passwordHash,
            dateOfBirth: this.dateOfBirth
          })
            .then((response) => {
              this.fetchData();
              alert(response.data);
            });
        }
      },
      refreshLayout() {
        document.querySelector('#addEmployee').className = 'btn btn-light px-2 py-0';
        document.querySelector('#map').className = 'd-none';
      }*/
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
  

 
