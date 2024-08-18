var app = new Vue({
   el: '#app',
   data: {
       apellido: 'Hugo Munguia',
       nombre: '',
       nota1: '',
       nota2: '',
       nota3: '',
       lista: []
   },
   methods: {
      agregarNotas: function() {
         // Convertir las notas a valores numéricos y verificar que sean válidos
         let n1 = parseFloat(this.nota1);
         let n2 = parseFloat(this.nota2);
         let n3 = parseFloat(this.nota3);
         
         // Verificar que el nombre no esté vacío y que las notas sean números válidos entre 0 y 10
         if (this.nombre !== '' && !isNaN(n1) && !isNaN(n2) && !isNaN(n3) &&
             n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10 && n3 >= 0 && n3 <= 10) {
             
            // Calcular el promedio de las tres notas
            let promedio = this.calcularPromedio(n1, n2, n3);
            
            // Determinar si el promedio es suficiente para aprobar o no
            let estado = promedio >= 7 ? 'Aprobado' : 'Reprobado';
            
            // Agregar los datos del estudiante a la lista
            this.lista.push({
               nombre: this.nombre,
               nota1: n1.toFixed(2),
               nota2: n2.toFixed(2),
               nota3: n3.toFixed(2),
               promedio: promedio.toFixed(2), // Redondea a 2 decimales
               estado: estado // Aprobado o Reprobado según el promedio
            });
            
            // Reiniciar los campos del formulario para la siguiente entrada
            this.nombre = '';
            this.nota1 = '';
            this.nota2 = '';
            this.nota3 = '';
         } else {
            alert('Debe ingresar todos los datos correctamente y las notas deben ser números entre 0 y 10');
         }
      },
      
      // Función para calcular el promedio de tres notas
      calcularPromedio: function(nota1, nota2, nota3) {
         return (nota1 + nota2 + nota3) / 3;
      }
   }
});