import { Component } from '@angular/core';
import { Camion } from './models/camion';
import { Camioneta } from './models/camioneta';
import { Automovil } from './models/automovil';
import { Barco } from './models/barco';
import { Yate } from './models/yate';
import { Avion } from './models/avion';
import { Avioneta } from './models/avioneta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Mi Aplicación';
  constructor() {
    const camion = new Camion('MarcaCamion', 'ModeloCamion', 2023, 'Rojo', 80, 5000, 'Materiales');
    const camioneta = new Camioneta('MarcaCamioneta', 'ModeloCamioneta', 2023, 'Azul', 100, 5, '4x4');
    const automovil = new Automovil('MarcaAuto', 'ModeloAuto', 2023, 'Negro', 160, 'Gasolina', 4);
    const barco = new Barco('MarcaBarco', 'ModeloBarco', 2023, 'Blanco', 50, 'Motor de Propulsión', 10);
    const yate = new Yate('MarcaYate', 'ModeloYate', 2023, 'Amarillo', 120, 'Motor de Lujo', 5);
    const avion = new Avion('MarcaAvion', 'ModeloAvion', 2023, 'Blanco', 400, 'Alas de Gran Envergadura', 200);
    const avioneta = new Avioneta('MarcaAvioneta', 'ModeloAvioneta', 2023, 'Rojo', 100, 4, 'Alas Pequeñas');
    console.log('camion:');
    console.log(camion);
    console.log('camioneta:');
    console.log(camioneta);
    console.log('automovil:');
    console.log(automovil);
    console.log('barco:');
    console.log(barco);
    console.log('yate:');
    console.log(yate);
    console.log('avion:');
    console.log(avion);
    console.log('avioneta:');
    console.log(avioneta);
    camion.mostrarPropiedades();
    camioneta.mostrarPropiedades();
    automovil.mostrarPropiedades();
    barco.mostrarPropiedades();
    yate.mostrarPropiedades();
    avion.mostrarPropiedades();
    avioneta.mostrarPropiedades();
  }
}
