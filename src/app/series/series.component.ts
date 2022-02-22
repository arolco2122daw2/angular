import { Component } from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
  animations: [
    trigger('fade2', [
        transition('void=> *', [ // using status here for transition
          style({ opacity: 0, right: -200 }),
          animate(3000, style({ opacity: 1, right: 0 }))
        ]),
      ]) 
  ]
})

export class SeriesComponent {
       
    shonen: any[]=[
        {
            "nombre": "Kimetsu no Yaiba",
            "autor": "Koyoharu Gotouge",
            "genere": "Shonen",
            "episodis": "44",
            "valoracio": "7.91",
            "descripcio":"Estamos en la era Taisho de Japón. Tanjiro, un joven que se gana la vida vendiendo carbón, descubre un día que su familia ha sido asesinada por un demonio. Para empeorar las cosas, su hermana menor Nezuko, la única superviviente de la masacre, ha sufrido una transformación en demonio.        Destrozado por los acontecimientos Tanjiro decide convertirse en un cazador de demonios para poder devolver a su hermana a la normalidad y matar al demonio que masacró a su familia.",
            "imagen": "assets/imatges/Anime-Demon-Slayer.jpeg",
            "url": "https://www.youtube.com/embed/Sl2k7bfBeCw"
        },
        {
            "nombre": "Dragon Ball",
            "autor": "Akira Toriyama",
            "genere": "Shonen",
            "episodis": "739",
            "valoracio": "7.96",
            "descripcio":"Este anime nos narra la historia de Goku, un excepcional niño que llegó a la Tierra en una cápsula durante una noche tormentosa. A medida que este va creciendo, dedicará su vida a entrenar para convertirse en el guerrero Saiyan más poderoso.",
            "imagen": "assets/imatges/dragonball.jpg",
            "url": "https://www.youtube.com/embed/uSi1tbWd3Ic"
        },
        {
            "nombre": "JoJo's Bizarre Adventure: Stardust Crusaders",
            "autor": "Hirohiko Araki",
            "genere": "Shonen",
            "episodis": "113",
            "valoracio": "8.10",
            "descripcio":"Jotaro Kujo debe iniciar un viaje a través del mundo junto a su abuelo, Joseph Joestar, y sus amigos para dirigirse a Egipto mientras se enfrentan a diversos peligros. El objetivo de este viaje consiste en vencer a DIO, un vampiro y hermanastro de su tatarabuelo Jonathan Joestar, ya que este su existencia pone en riesgo la salud de su madre.",
            "imagen": "assets/imatges/jojo.jpg",
            "url": "https://www.youtube.com/embed/_ZGRCxnAiaU"

        },
        {
            "nombre": "My Dress-Up Darling",
            "autor": "Shinichi Fukuda",
            "genere": "Romance",
            "episodis": "12",
            "valoracio": "8.31",
            "descripcio":"Gojo Wakana es un estudiante de preparatoria que quiere convertirse en un maestro del tradicional arte de crear muñecas Hina que tiene problemas para encajar con sus compañeros de clase. Esto cambia cuando una chica llamada Marin Kitagawa, descubre su objetivo y hace que sus dos mundos coincidan.",
            "imagen": "assets/imatges/my-dress-up-darling.jpg",
            "url": "https://www.youtube.com/embed/hbtyjcPaGp4"
        },
        {
            "nombre": "Inazuma Eleven",
            "autor": "Tenya Yabuno",
            "genere": "Shonen",
            "episodis": "127",
            "valoracio": "7.63",
            "descripcio":"Mark Evans es un portero muy talentoso y el nieto de uno de los más grandes porteros en Japón, que murió antes de nacer él. Después de conocer a un misterioso delantero llamado Endou, decide buscar y reclutar miembros para su equipo de fútbol.",
            "imagen": "assets/imatges/inazumaeleven.jpg",
            "url": "https://www.youtube.com/embed/8A0zd_NN5aQ"
        },
        {
            "nombre": "Shûmatsu no Valkyrie",
            "autor": "Koyoharu Gotouge",
            "genere": "Seinen",
            "episodis": "12",
            "valoracio": "6.63",
            "descripcio":"Los dioses del mundo se reúnen en el cielo para decidir el destino de la humanidad, decidiendo que esta ha de llegar a su fin. Pero la hermana mayor de las Valkirias, Brunhilda, propone iniciar el 'Torneo del Rargnarok', para cambiar este destino.",
            "imagen": "assets/imatges/shuumatsu.jpg",
            "url": "https://www.youtube.com/embed/_9HxsIYORyE"
        },
        {
            "nombre": "Shingeki No Kyojin",
            "autor": "Hajime Isayama",
            "genere": "Seinen",
            "episodis": "75",
            "valoracio": "8,72",
            "descripcio":"Hace siglos, la humanidad fue masacrada casi hasta la extinción por los 'Titanes, obligando a los humanos a esconderse detrás de enormes muros concéntricos.",
            "imagen": "assets/imatges/snk.jpg",
            "url": "https://www.youtube.com/embed/MGRm4IzK1SQ"
        },
        {
            "nombre": "Your Lie in April",
            "autor": "Koyoharu Gotouge",
            "genere": "Romance",
            "episodis": "22",
            "valoracio": "8.67",
            "descripcio":"Un talentoso pianista, ganador de numerosos premios, no es capaz de volver a tocar desde que murió su estricta madre. Una violinista de espíritu libre le ayudará a recobrar la pasión por la música. ",
            "imagen": "assets/imatges/yourlieinapril.png",
            "url": "https://www.youtube.com/embed/3aL0gDZtFbE"
        },
    ]
}




