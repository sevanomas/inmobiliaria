


const propiedadesA = [
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

];

//Arreglo
const propiedadesV = [
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
  


];

let ventas = document.querySelector('.ventas')
let alquiler = document.querySelector('.alquiler')
let html = ''
for (const propiedadA  of propiedadesA) {
  html += `<div class="col-md-4 mb-4">
            <div class="card">
              <img
                src=${propiedadA.src}
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
                <p class="${propiedadA.smoke ==false ? 'text-danger': 'text-success'}">
                  <i class="fas fa-smoking-ban"></i>
                    ${propiedadA.smoke === false? 'No se permite fumar': 'Permitido fumar'}
                </p>
                <p class="${propiedadA.pets ==false ? 'text-danger': 'text-success'}">
                  <i class="fas fa-paw"></i>
                  ${propiedadA.pets === false ?'no se permiten mascotas': 'Mascotas permitidas'}
                </p>
              </div>
            </div>
          </div>`
}
let htmlV= ''
for (const propiedadV  of propiedadesV) {
  htmlV += `<div class="col-md-4 mb-4">
            <div class="card">
              <img
                src=${propiedadV.src}
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
                <p class="${propiedadV.smoke ==false ? 'text-danger': 'text-success'}">
                  <i class="fas fa-smoking-ban"></i>
                    ${propiedadV.smoke === false? 'No se permite fumar': 'Permitido fumar'}
                </p>
                <p class="${propiedadV.pets ==false ? 'text-danger': 'text-success'}">
                  <i class="fas fa-paw"></i>
                  ${propiedadV.pets === false ?'no se permiten mascotas': 'Mascotas permitidas'}
                </p>
              </div>
            </div>
          </div>`
}

ventas.innerHTML= htmlV
alquiler.innerHTML = html
