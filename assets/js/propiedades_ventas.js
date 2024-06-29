

const propiedades_Ventas = [
    {
      nombre: "Apartamento de lujo en zona exclusiva",
      src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
      ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
      habitaciones: 4,
      costo: 5.000,
      smoke: false,
      pets: false,
      propiedad: true
    },
    {
      nombre: "Apartamento acogedor en la montaña",
      src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
      ubicacion: " 789 Mountain Road, Summit Peaks, CA 23456",
      habitaciones: 4,
      costo: 1.200,
      smoke: true,
      pets: true,
      propiedad: true
  
    },
    {
      nombre: "Penthouse de lujo con terraza panorámica",
      src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
      ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
      habitaciones: 2,
      costo: 4.500,
      smoke: false,
      pets: true,
      propiedad: true
    },
    {
      nombre: "",
      src: "",
      descripcion: "",
      ubicacion: "",
      habitaciones: 0,
      costo: 0,
      smoke: true,
      pets: false,
      propiedad: false
    },
    {
      nombre: "",
      src: "",
      descripcion: "",
      ubicacion: "",
      habitaciones: 0,
      costo: 0,
      smoke: true,
      pets: false,
      propiedad: true
    },
  ];

  let propiedadesVentas = document.querySelector('.ventas') 

  

  let html = ''
  let botonVentas = document.querySelector('.botonVentas')
  
  function funVentas() {
      for (const proVentas of propiedades_Ventas) {
          if (proVentas.propiedad== false) {
              html += `<div class="col-md-4 mb-4">
              <div class="card">
                <img
                  src=${proVentas.src}
                  class="card-img-top"
                  alt="Imagen del departamento"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    Apartamento en el centro de la ciudad
                  </h5>
                  <p class="card-text">
                    Este apartamento de 2 habitaciones está ubicado en el corazón
                    de la ciudad, cerca de todo.
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt"></i>
                    123 Main Street, Anytown, CA 91234
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
                  <p class="${proVentas.smoke ==false ? 'text-danger': 'text-success'}">
                    <i class="fas fa-smoking-ban"></i>
                      ${proVentas.smoke === false? 'No se permite fumar': 'Permitido fumar'}
                  </p>
                  <p class="${proVentas.pets ==false ? 'text-danger': 'text-success'}">
                    <i class="fas fa-paw"></i>
                    ${proVentas.pets === false ?'no se permiten mascotas': 'Mascotas permitidas'}
                  </p>
                </div>
              </div>
            </div>`
          } else {
              
          }
       
      }
     
      propiedadesVentas.innerHTML = html
  }
  
  botonVentas.addEventListener('click', ()=>{
      funVentas()
  })

  for (const proVentas of propiedades_Ventas) {
     if (proVentas.propiedad == true) {
      html += `<div class="col-md-4 mb-4">
      <div class="card">
        <img
          src=${proVentas.src}
          class="card-img-top"
          alt="Imagen del departamento"
        />
        <div class="card-body">
          <h5 class="card-title">
            Apartamento en el centro de la ciudad
          </h5>
          <p class="card-text">
            Este apartamento de 2 habitaciones está ubicado en el corazón
            de la ciudad, cerca de todo.
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i>
            123 Main Street, Anytown, CA 91234
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
          <p class="${proVentas.smoke ==false ? 'text-danger': 'text-success'}">
            <i class="fas fa-smoking-ban"></i>
            ${proVentas.smoke === false? 'No se permite fumar': 'Permitido fumar'}
          </p>
          <p class="${proVentas.pets ==false ? 'text-danger': 'text-success'}">
            <i class="fas fa-paw"></i>
            ${proVentas.pets === false ?'No se permiten mascotas': 'Mascotas permitidas'}
          </p>
        </div>
      </div>
    </div>`
     } else {
      
     }
  }

  propiedadesVentas.innerHTML = html

