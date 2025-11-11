import bannerEtitc from "../../assets/images/banners/bannerEtitc.png"
import logoEtitc from "../../assets/images/profile/logoEtitc.jpg"

const etitc = {
  id: "etitc",
  name: "ETITC",
  banner: bannerEtitc,
  logo: logoEtitc,
  summary: {
    summary: "La Escuela Tecnológica Instituto Técnico Central fue fundada por los Hermanos de La Salle y creada mediante el Decreto No. 146 del 9 de febrero de 1905, y reestructurado por el Decreto 758 del 26 de abril de 1988, es un Establecimiento Publico de Educación Superior, su carácter académico es de Escuela Tecnológica o Institución Universitaria, del Orden Nacional, con personería Jurídica, autonomía administrativa y patrimonio independiente, adscrita al Ministerio de Educación Nacional, con domicilio principal en la ciudad de Bogotá. MISIÓN La Escuela Tecnológica Instituto Técnico Central forma personas creativas y competentes en las áreas técnicas, tecnológicas e ingenierías capaces de solucionar problemas a través de la investigación aplicada. VISIÓN Seremos reconocidos como una institución educativa competitiva en la formación técnica, tecnológica y de ingeniería desarrollando competencias en las personas, para que aporten innovación y cambio en el mundo laboral, industrial, social y ambiental."
  },
  channel: [
    {
      name: "General", items: [
        {name: "Anuncios institucionales"},
        {name: "Novedades"},            
        {name: "Chat general"},   
      ],      
    },
    {
      name: "Académico", items: [
        {name: "Proyectos de investigación"},
        {name: "Asesorias y tutorías"},            
      ],
    },
    {
      name: "Soporte", items: [
        {name: "Preguntas frecuentes"},
        {name: "Problemas registro"}
      ],
    },
    {
      name: "Social", items: [
        {name: "Eventos y actividades"},
        {name: "Ideas y sugerencias"},
      ]
    }    
  ]  
}

export default etitc;