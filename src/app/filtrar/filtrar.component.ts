import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.scss']

})
export class FiltrarComponent {
  filterpost = '';
  posts = [
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
},
{
  "nombre": "Kimetsu no Yaiba",
  "autor": "Koyoharu Gotouge",
  "genere": "Shonen",
  "episodis": "44 episodis",
  "valoracio": "7.91",
  "descripcio":"Estamos en la era Taisho de Japón. Tanjiro, un joven que se gana la vida vendiendo carbón, descubre un día que su familia ha sido asesinada por un demonio. Para empeorar las cosas, su hermana menor Nezuko, la única superviviente de la masacre, ha sufrido una transformación en demonio.        Destrozado por los acontecimientos Tanjiro decide convertirse en un cazador de demonios para poder devolver a su hermana a la normalidad y matar al demonio que masacró a su familia.",
  "imagen": "assets/imatges/Anime-Demon-Slayer.jpeg",
  "url": "https://www.youtube.com/embed/Sl2k7bfBeCw"

},
{
  "nombre": "Dragon Ball",
  "autor": "Akira Toriyama",
  "genere": "Shonen",
  "episodis": "739 episodis",
  "valoracio": "7.96",
  "descripcio":"Este anime nos narra la historia de Goku, un excepcional niño que llegó a la Tierra en una cápsula durante una noche tormentosa. A medida que este va creciendo, dedicará su vida a entrenar para convertirse en el guerrero Saiyan más poderoso.",
  "imagen": "assets/imatges/dragonball.jpg",
  "url": "https://www.youtube.com/embed/uSi1tbWd3Ic"

},
{
  "nombre": "JoJo's Bizarre Adventure: Stardust Crusaders",
  "autor": "Hirohiko Araki",
  "genere": "Shonen",
  "episodis": "113 episodis",
  "valoracio": "8.10",
  "descripcio":"Jotaro Kujo debe iniciar un viaje a través del mundo junto a su abuelo, Joseph Joestar, y sus amigos para dirigirse a Egipto mientras se enfrentan a diversos peligros. El objetivo de este viaje consiste en vencer a DIO, un vampiro y hermanastro de su tatarabuelo Jonathan Joestar, ya que este su existencia pone en riesgo la salud de su madre.",
  "imagen": "assets/imatges/jojo.jpg",
  "url": "https://www.youtube.com/embed/_ZGRCxnAiaU"

},
{
  "nombre": "My Dress-Up Darling",
  "autor": "Shinichi Fukuda",
  "genere": "Romance",
  "episodis": "12 episodis",
  "valoracio": "8.31",
  "descripcio":"Gojo Wakana es un estudiante de preparatoria que quiere convertirse en un maestro del tradicional arte de crear muñecas Hina que tiene problemas para encajar con sus compañeros de clase. Esto cambia cuando una chica llamada Marin Kitagawa, descubre su objetivo y hace que sus dos mundos coincidan.",
  "imagen": "assets/imatges/my-dress-up-darling.jpg",
  "url": "https://www.youtube.com/embed/hbtyjcPaGp4"

},
{
  "nombre": "Inazuma Eleven",
  "autor": "Tenya Yabuno",
  "genere": "Shonen",
  "episodis": "127 episodis",
  "valoracio": "7.63",
  "descripcio":"Mark Evans es un portero muy talentoso y el nieto de uno de los más grandes porteros en Japón, que murió antes de nacer él. Después de conocer a un misterioso delantero llamado Endou, decide buscar y reclutar miembros para su equipo de fútbol.",
  "imagen": "assets/imatges/inazumaeleven.jpg",
  "url": "https://www.youtube.com/embed/8A0zd_NN5aQ"

},
{
  "nombre": "Shûmatsu no Valkyrie",
  "autor": "Koyoharu Gotouge",
  "genere": "Seinen",
  "episodis": "12 episodis",
  "valoracio": "6.63",
  "descripcio":"Los dioses del mundo se reúnen en el cielo para decidir el destino de la humanidad, decidiendo que esta ha de llegar a su fin. Pero la hermana mayor de las Valkirias, Brunhilda, propone iniciar el 'Torneo del Rargnarok', para cambiar este destino.",
  "imagen": "assets/imatges/shuumatsu.jpg",
  "url": "https://www.youtube.com/embed/_9HxsIYORyE"

},
{
  "nombre": "Shingeki No Kyojin",
  "autor": "Hajime Isayama",
  "genere": "Seinen",
  "episodis": "75 episodis",
  "valoracio": "8,72",
  "descripcio":"Hace siglos, la humanidad fue masacrada casi hasta la extinción por los 'Titanes, obligando a los humanos a esconderse detrás de enormes muros concéntricos.",
  "imagen": "assets/imatges/snk.jpg",
  "url": "https://www.youtube.com/embed/MGRm4IzK1SQ"

},
{
  "nombre": "Your Lie in April",
  "autor": "Koyoharu Gotouge",
  "genere": "Romance",
  "episodis": "22 episodis",
  "valoracio": "8.67",
  "descripcio":"Un talentoso pianista, ganador de numerosos premios, no es capaz de volver a tocar desde que murió su estricta madre. Una violinista de espíritu libre le ayudará a recobrar la pasión por la música. ",
  "imagen": "assets/imatges/yourlieinapril.png",
  "url": "https://www.youtube.com/embed/3aL0gDZtFbE"

},
  ];

}