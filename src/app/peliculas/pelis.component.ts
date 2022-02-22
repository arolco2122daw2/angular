import { Component } from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.component.html',
  styleUrls: ['./pelis.component.scss'],
  animations: [
    trigger('fade', [
      transition('void=> *', [ // using status here for transition
        style({ opacity: 0, left: -200 }),
        animate(3000, style({ opacity: 1, left: 0 }))
      ]),
    ])
  ]
})
export class PelisComponent {
pelis: any[]=[
    {
        "nombre": "Kimetsu no Yaiba: Mugen Ressha-hen",
        "autor": "Koyoharu Gotouge",
        "genere": "Shonen",
        "durada": "1 h 57 m",
        "valoracio": "8.70",
        "descripcio":"Tanjiro Kamado y sus amigos acompañan a Kyōjurō Rengoku, el Flame Hashira, para investigar una misteriosa serie de desapariciones que ocurren dentro de un tren aparentemente infinitamente largo. Poco saben que Enmu, la última de las Lunas Inferiores de los Doce Kizuki, también está a bordo y les ha preparado una trampa.",
        "imagen": "assets/imatges/kimetsupeli.jpg",
        "url": "https://www.youtube.com/embed/-AwLMRgcEoA"
    },
    {
        "nombre": "Your name",
        "autor": "Makoto Shinkai",
        "genere": "Romance",
        "durada": "1 h 52 m",
        "valoracio": "8.88",
        "descripcio":"Taki y Mitsuha descubren un día que durante el sueño sus cuerpos se intercambian, y comienzan a comunicarse por medio de notas. A medida que consiguen superar torpemente un reto tras otro, se va creando entre los dos un vínculo que poco a poco se convierte en algo más romántico",
        "imagen": "assets/imatges/yourname.jpg",
        "url": "https://www.youtube.com/embed/qz0TDMd_cB0"
    },
    {
      "nombre": "A Silent Voice",
      "autor": "Naoko Yamada",
      "genere": "Romance",
      "durada": "2 h 9 m",
      "valoracio": "8.94",
      "descripcio":"La historia gira en torno a Shôko Nishimiya, una estudiante de primaria que es sorda y que al cambiarse de colegio comienza a sentir el bullying de sus nuevos compañeros. Uno de los principales responsables es Ishida Shôya quien termina por forzar que Nishimiya se cambie de escuela. Años después, Ishida busca la redención de sus malas acciones.",
      "imagen": "assets/imatges/silentvoice.jpg",
      "url": "https://www.youtube.com/embed/nfK6UgLra7g"
   },
   {
    "nombre": "Dragon Ball Super: Broly",
    "autor": "Tatsuya Nagamine",
    "genere": "Shonen",
    "durada": "1 h 40 m",
    "valoracio": "8.12",
    "descripcio":"La Tierra disfruta en paz la celebración de el Torneo del Poder. Sin embargo, Goku es consciente de que existen enemigos aún por descubrir en el Universo, por lo que sigue entrenando sin descanso para alcanzar cotas de poder nunca antes conocidas en un superguerrero. Confirmando sus peores temores, un día aparece un supersayano que responde al nombre de Broly, un poderoso guerrero que debería de haber sido eliminado junto con el planeta Vegeta cuando éste fue destruído hace ya algunas décadas. ¿Cómo ha podido sobrevivir un guerrero de tal poder? La situación no deja de empeorar cuando el mismísimo Frieza vuelve desde el Infierno para verse envuelto en un terrible mix que llevará a los héroes a luchar por salvar el planeta Tierra una vez más.",
    "imagen": "assets/imatges/Dragon-Ball-Super-Broly.jpg",
    "url": "https://www.youtube.com/embed/dl3w10VVQj8"
  },
  {
    "nombre": "One Piece Film: Gold",
    "autor": "Miyamoto Hiroaki",
    "genere": "Shonen",
    "durada": "2 h",
    "valoracio": "7.92",
    "descripcio":"Luffy y el resto de Piratas de Sombrero de Paja deciden poner rumbo a una embarcación dorada y con muchas luces de neón de 10 kilómetros de largo. Es tan grande como una ciudad, reconocida como país independiente por el Gobierno Mundial y como la mayor ciudad del entretenimiento del mundo bajo el nombre de Gran Tesoro. Allí, piratas, marines y millonarios se dan cita en un “santuario absoluto” fuera del alcance del Gobierno Mundial gracias a la riqueza del Rey del Casino, Gildo Tesoro, un hombre del que se dice que posee un 20% del dinero del mundo. Pero no es oro todo lo que reluce y Gildo Tesoro se dispone a satisfacer su ambición sin límites, algo que podría cambiar para siempre las relaciones de poder del mundo… ¿Qué les espera allí a Luffy y a sus amigos? ¿La gloria eterna o una oscuridad insondable?",
    "imagen": "assets/imatges/one-piece-film-gold.jpg",
    "url": "https://www.youtube.com/embed/z0LNGN5GHtU"
  }
]

}