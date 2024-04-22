import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
articulos =[
  { id:1,
    titulo : "Hacking etico",
    imagen: "https://www.segurilatam.com/wp-content/uploads/sites/5/2021/07/hacking-etico-articulo-1200x630.jpg",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Augue ut lectus arcu bibendum at varius vel pharetra."
  },
  { id:2,
    titulo : "Legislacion de Seguridad en Europa",
    imagen: "https://www.casares.blog/wp-content/uploads/europe-2021308-768x512.jpg",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Augue ut lectus arcu bibendum at varius vel pharetra."
  },
  { id:3,
    titulo : "¿Como evitar que te hackeen la cuenta?",
    imagen: "https://th.bing.com/th/id/R.9ebce5003fe9b5aa7d2048047c1e1c4a?rik=u%2f5DAQ1yTby%2f7A&pid=ImgRaw&r=0",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Augue ut lectus arcu bibendum at varius vel pharetra."
  },
  { id:4,
    titulo : "¿Como evitar que te hackeen la cuenta?",
    imagen: "https://th.bing.com/th/id/R.9ebce5003fe9b5aa7d2048047c1e1c4a?rik=u%2f5DAQ1yTby%2f7A&pid=ImgRaw&r=0",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Augue ut lectus arcu bibendum at varius vel pharetra."
  },


]
}
