
const propiedades_alquiler = [
    {
      nombre: "Apartamento en el centro de la ciudad",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      costo: 2.000,
      smoke: true,
      pets: true,
      propiedad: true
  
    },
    {
      nombre: "Apartamento luminoso con vista al mar",
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
      ubicacion: " 456 Ocean Avenue, Seaside Town, CA 56789",
      habitaciones: 3,
      costo: 2.500,
      smoke: false,
      pets: true,
      propiedad: true
    },
    {
      nombre: "Condominio moderno en zona residencial",
      src:'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
      ubicacion: " 123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      costo: 2.200,
      smoke: false,
      pets: true,
      propiedad: true
    },
    {
      nombre: "Parcela en el sur de Chile",
      src: "https://imganuncios.mitula.net/parcela_en_venta_en_pillanlelbun_pillanlelbun_cautin_420_m2_3_hab_8960036680781490458.jpg",
      descripcion: "",
      ubicacion: "Osorno",
      habitaciones: 4,
      costo: 3.000,
      smoke: true,
      pets: false,
      propiedad: true
    },
  ];

  let propiedadesAlquiler = document.querySelector('.alquiler') 


  let htnl2 = ''

  

  let botonAlquiler = document.querySelector('.botonAlquiler')
  
  function funAlquiler() {
      for (const proAlquiler of propiedades_alquiler) {
          if (proAlquiler.propiedad== false) {
              htnl2 += `<div class="col-md-4 mb-4">
              <div class="card">
                <img
                  src=${proAlquiler.src}
                  class="card-img-top"
                  alt="Imagen del departamento"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    Apartamento en el centro de la ciudad
                  </h5>
                  <p class="card-text">
                   ${proAlquiler.descripcion}
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt"></i>
                    ${proAlquiler.ubicacion}
                  </p>
                  <p>
                    <i class="fas fa-bed"></i>
                    2 Habitaciones |
                    <i class="fas fa-bath"></i>
                    2 Baños
                  </p>
                  <p>
                    <i class="fas fa-dollar-sign"></i>
                    2.000
                  </p>
                  <p class="${proAlquiler.smoke ==false ? 'text-danger': 'text-success'}">
                    <i class="fas fa-smoking-ban"></i>
                      ${proAlquiler.smoke === false? 'No se permite fumar': 'Permitido fumar'}
                  </p>
                  <p class="${proAlquiler.pets ==false ? 'text-danger': 'text-success'}">
                    <i class="fas fa-paw"></i>
                    ${proAlquiler.pets === false ?'no se permiten mascotas': 'Mascotas permitidas'}
                  </p>
                </div>
              </div>
            </div>`
          } else {
              
          }
       
      }
      propiedadesAlquiler.innerHTML = htnl2
  }
  
  botonAlquiler.addEventListener('click', ()=>{
      funAlquiler()
  })
  
  for (const proAlquiler of propiedades_alquiler) {
     if (proAlquiler.propiedad == true) {
      htnl2 += `<div class="col-md-4 mb-4">
      <div class="card">
        <img
          src=${proAlquiler.src}
          class="card-img-top"
          alt="Imagen del departamento"
        />
        <div class="card-body">
          <h5 class="card-title">
            ${proAlquiler.nombre}
          </h5>
          <p class="card-text">
           ${proAlquiler.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i>
            ${proAlquiler.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i>
            2 Habitaciones |
            <i class="fas fa-bath"></i>
            2 Baños
          </p>
          <p>
            <i class="fas fa-dollar-sign"></i>
            2.000
          </p>
          <p class="${proAlquiler.smoke ==false ? 'text-danger': 'text-success'}">
            <i class="fas fa-smoking-ban"></i>
            ${proAlquiler.smoke === false? 'No se permite fumar': 'Permitido fumar'}
          </p>
          <p class="${proAlquiler.pets ==false ? 'text-danger': 'text-success'}">
            <i class="fas fa-paw"></i>
            ${proAlquiler.pets === false ?'No se permiten mascotas': 'Mascotas permitidas'}
          </p>
        </div>
      </div>
    </div>`
     } else {
      
     }
  }
  propiedadesAlquiler.innerHTML = htnl2

  