import campusFacadeAsset from "@/assets/campus-facade-1.png.asset.json";
import campusEntranceAsset from "@/assets/campus-entrance.png.asset.json";
import campusCourtyardAsset from "@/assets/campus-courtyard.png.asset.json";
import rentreeAsset from "@/assets/rentree-2026-2027.png.asset.json";
import inscriptionAsset from "@/assets/inscription-ecsg.jpeg.asset.json";
import maternelle from "@/assets/cycle-maternelle.jpg";
import primaire from "@/assets/cycle-primaire.jpg";
import college from "@/assets/cycle-college.jpg";
import lycee from "@/assets/cycle-lycee.jpg";

const campusFacade = campusFacadeAsset.url;
const campusEntrance = campusEntranceAsset.url;
const campusCourtyard = campusCourtyardAsset.url;
const rentreePoster = rentreeAsset.url;
const inscriptionPoster = inscriptionAsset.url;

export const school = {
  name: "École Chrétienne Sola Gratia",
  shortName: "Sola Gratia",
  motto: "Volonté • Courage • Succès",
  founded: "16 septembre 2002",
  founder: "Dosseh Kokou Beaugars",
  address: "04 BP 693, Yokoè Agblégan, Lomé, Togo",
  phones: ["+228 90 07 10 65", "+228 91 47 74 56"],
  email: "gratiasola2002@gmail.com",
  oldSite: "https://echofantom47.github.io/solagratia/",
  maps: "https://www.google.com/maps/search/?api=1&query=%C3%89cole+Chr%C3%A9tienne+Sola+Gratia+Yoko%C3%A8+Agbl%C3%A9gan+Lom%C3%A9+Togo",
  whatsapp: "https://wa.me/22890071065?text=Bonjour%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20l%27%C3%89cole%20Chr%C3%A9tienne%20Sola%20Gratia.",
};

export const cycles = [
  { slug: "maternelle", title: "Maternelle", kicker: "Éveil et découverte", image: maternelle, text: "Un premier cadre d’apprentissage attentif, fondé sur l’éveil, la découverte et les valeurs chrétiennes." },
  { slug: "primaire", title: "Primaire", kicker: "Fondations solides", image: primaire, text: "Un enseignement structuré pour développer les connaissances fondamentales, la curiosité et l’autonomie." },
  { slug: "college", title: "Collège", kicker: "Consolider et grandir", image: college, text: "Un parcours qui approfondit les savoirs, la méthode, la discipline et la préparation au BEPC." },
  { slug: "lycee", title: "Lycée", kicker: "Préparer l’avenir", image: lycee, text: "Les séries A4, C et D préparent les élèves au Baccalauréat et à la poursuite de leurs études." },
];

export const values = [
  { number: "01", title: "Foi", text: "Une éducation guidée par les valeurs chrétiennes et le respect de chaque personne." },
  { number: "02", title: "Excellence", text: "Le goût de l’effort, la rigueur et la recherche constante d’un travail de qualité." },
  { number: "03", title: "Intégrité", text: "Former le caractère, la responsabilité et la cohérence entre les paroles et les actes." },
  { number: "04", title: "Service", text: "Apprendre à mettre ses compétences au service de la communauté et du bien commun." },
];

export const authenticImages = {
  campusFacade,
  campusEntrance,
  campusCourtyard,
  rentreePoster,
  inscriptionPoster,
};

export const editorialItems = [
  { type: "Actualité", title: "Les nouvelles de Sola Gratia seront publiées ici", text: "Cet espace est prêt à recevoir les communiqués et informations officielles de l’établissement." },
  { type: "Événement", title: "Un calendrier pensé pour la vie scolaire", text: "Les prochaines dates seront affichées dès leur validation par l’administration." },
];