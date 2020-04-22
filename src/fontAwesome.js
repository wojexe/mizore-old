import Vue from "vue";

import {
  faUser,
  faEye,
  faEyeSlash,
  faTimes,
  faDollarSign,
  faUserPlus,
  faEnvelope,
  faLocationArrow,
  faSuitcase,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
  faUser,
  faEye,
  faEyeSlash,
  faTimes,
  faDollarSign,
  faUserPlus,
  faEnvelope,
  faLocationArrow,
  faSuitcase,
  faStar,

  faGithub,
  faDiscord
);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default function() {
  window.FontAwesomeConfig = {
    searchPseudoElements: true
  };

  Vue.component("font-awesome-icon", FontAwesomeIcon);
}
