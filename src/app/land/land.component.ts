import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-land",
  templateUrl: "./land.component.html",
  styleUrls: ["./land.component.css"],
})
export class LandComponent implements OnInit {
  images = [
    { path: "assets/quad0.jpeg" },
    { path: "assets/quad1.jpeg" },
    { path: "assets/quad2.jpeg" },
    { path: "assets/quad3.jpeg" },
    { path: "assets/quad4.jpeg" },
  ];

  slides = [
    {
      title: "Automotor",
      desc:
        "Asegurar tu auto al menor costo y con la mayor efectividad. Tenemos la mejor cobertura para el seguro de tu auto nuevo o usado. No sigas pagando de más, cotizá con nosotros tu seguro.<br>Tener seguro de auto puede ayudar a proteger a las personas y las cosas que son importantes para usted. Es importante tener un seguro con cobertura de responsabilidad civil y cobertura contra todo riesgo para proteger la inversión en su auto. <br> El seguro de auto puede ayudarle a:" +
        "<ul>" +
        "<li>Proteger la inversión de su automóvil</li>" +
        "<li>Pagar gastos médicos en caso de accidentes</li>" +
        "<li>Proporcionar protección financiera ante demandas judiciales</li>" +
        "<li>Cubrir pérdidas elegibles causadas por conductores sin seguro o con seguro insuficiente para pagar daños por robo, vandalismo o desastres naturales</li>" +
        "<li>Tener la paz y tranquilidad para enfrentar cualquier situación que se presente</li>" +
        "</ul>Recuerde que sin seguro de auto no podrá conducir legalmente. Además, si usted se encuentra en un accidente y no tiene seguro de auto para cubrir los gastos relacionados, podría perjudicar su situación financiera y afectar su habilidad para ir a trabajar o de llevar a sus hijos a la escuela. <br> No todas las coberturas son iguales. Cuando determine qué tipo de cobertura de seguro de auto es adecuada para usted, tenga presente su situación específica. Los distintos tipos de opciones y límites de cobertura se ajustan a las diferentes necesidades que puede tener una persona.",
      reverse: false,
      color: "#77f",
      img: "assets/quad4.jpeg",
      merger: {
        direction: "right",
        color1: "#77f",
        color2: "#02296a",
      },
    },
    {
      title: "Hogar",
      desc: "Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus",
      reverse: true,
      color: "#02296a",
      img: "assets/quad3.jpeg",
      merger: {
        direction: "left",
        color1: "#02296a",
        color2: "#004e98",
      },
    },
    {
      title: "Comercio",
      desc: "El seguro integral de comercio para su negocio, oficina o local. Contrate hoy su seguro de comercio y duerma con la tranquilidad de que su esfuerzo y su inversión se encuentra en buenas manos.<br><br>¿Por qué es importante?<br><br>El negocio es fuente de ingresos tanto para los dueños como para el personal, de esto no hay duda. Representa el esfuerzo de años en un contexto económico siempre difícil. Es prudente proteger la continuidad para no tener que empezar de cero. Un plan de seguros se arma a medida teniendo en cuenta la actividad, la estacionalidad, el stock de mercaderías, etc. Hay hechos que traen consecuencias más o menos determinantes según su naturaleza: de robos, rotura de cristales, robo de valores en caja, daños por agua nos podemos recuperar a corto o mediano plazo. Sin embargo, hay otros de los que debemos estar prevenidos: incendios de edificio, incendio de contenidos, reclamos de civiles por daños a terceros y por los productos que comercializamos. Recuperarse puede ser en muchos casos imposible. Por eso armamos un plan ajustado a sus necesidades y presupuesto, luego, como empresarios, ustedes. deciden.",
      reverse: false,
      color: "#004e98",
      img: "assets/quad2.jpeg",
      merger: {
        direction: "right",
        color1: "#004e98",
        color2: "#00284d",
      },
    },
    {
      title: "Agrícola",
      desc: "El seguro agrícola es un mecanismo diseñado a reducir el riesgo financiero derivado de factores que no son controlables por el agricultor, tal como el clima, plagas y enfermedades. Aseguramos cultivos anuales y perennes; así como especies en invernaderos y forestales.<br>Este tipo de seguro agrícola abarca y cubre una serie de riesgos, por lo general climáticos y/o biológicos. Los riesgos climáticos que generalmente cubren los seguros agropecuarios son: granizo, incendio, inundación, sequía, vientos, heladas, falta de piso y lluvias en exceso. Los riesgos biológicos que cubre estos seguros para el agro son daños por insectos, plagas y enfermedades.",
      reverse: true,
      color: "#00284d",
      img: "assets/quad1.jpeg",
      merger: {
        direction: "left",
        color1: "#00284d",
        color2: "#005cb3",
      },
    },
    {
      title: "Accidentes Personales",
      desc: "El seguro de accidentes personales esta destinado a cubrir los eventos dañosos derivados de accidentes en ocasión de trabajo para aquellos empleados temporales o cuntapropistas que no encuadren dentro del régimen de a.r.t",
      reverse: false,
      color: "#005cb3",
      img: "assets/quad0.jpeg",
      merger: {
        direction: "right",
        color1: "#005cb3",
        color2: "#454e7f",
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
