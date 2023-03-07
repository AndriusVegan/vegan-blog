import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
//import {googleMapsInput} from '@sanity/google-maps-input'
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import StudioNavbar from "./components/StudioNavbar";
import Logo from "./components/Logo";

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio", // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`
  name: "VEGAN_Content_Studio",
  title: "VEGAN Content Studio",

  projectId,
  dataset,

  plugins: [
    deskTool(),
    visionTool(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
  // icon: Logo,
  // logo: Logo,
  // subtitle: "Login to manage the Blog",
  // title: "PAPAFAM Content Studio",
  // name: "PAPAFAM_Content_Studio",
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
