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


  const catalogo = {
    template: `
    <div>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
 Add Employee
</button>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            Employee Id
        </th>
        <th>
            Employee Name
        </th>
        <th>
            Department
        </th>
        <th>
            DOJ
        </th>
        <th>
            Options
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="ilb in libri">
        <td>{{lib.Titolo}}</td>
        <td>{{lib.Venditore}}</td>
        <td>{{lib.Prezzo}}</td>
        <td>{{lib.Valutazione}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(lib)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(lib.Titolo)"
            class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

        </td>
    </tr>
</tbody>
</thead>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>

    <div class="modal-body">
    <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 w-50 bd-highlight">
            <div class="input-group mb-3">
                <span class="input-group-text">Name</span>
                <input type="text" class="form-control" v-model="EmployeeName">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">DOJ</span>
                <input type="date" class="form-control" v-model="DateOfJoining">
            </div>

        </div>

</div>
</div>
</div>


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
        axios.get(variables.API_URL + 'libri/')
          .then((response) => {
            this.libri = JSON.parse(response.data);
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
    },
    mounted: function () {
      this.fetchData();
    }
  
  }
  

 
