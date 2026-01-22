import { TAGS, addTag} from "./data_utils"
import { TECHNOLOGIES } from "./techs";


// ----------------------------------------------------------------------------------------- //
// Data Object Collections
// ----------------------------------------------------------------------------------------- //
// =======================================
// 1. THE HERO SECTION
// =======================================
export const HERO_DATA = {
  name: "",
  title: "",
  location: "",
  intro: ""
};

// =======================================
// 2. THE CONTACTS
// =======================================
export const CONTACTS = [
  {
    key: "email",
    label: "Email",
    value: "myemail@example.com",
    href: "mailto:myemail@example.com",
    icon: ""
  },
];

// =======================================
// 3. THE SELECTIONS (Pick from Library)
// =======================================
// A. Main Skills Carousel
const SKILLS = [addTag(TECHNOLOGIES.TECH, TAGS.EXPLORING)];

// B. Currently Learning Box
const LEARNING = [TECHNOLOGIES.TECH];

// Unified Export
export const TECH_STACK_DATA = {
  title: "Technology Stack",
  desc: "",
  skills: SKILLS,
  learning: LEARNING
};
