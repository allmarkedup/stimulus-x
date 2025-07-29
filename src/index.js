import { init } from "./lifecycle";
import { modifier } from "./modifiers";
import { directive } from "./directives";
import { nextTick } from "./scheduler";

import "./modifiers/downcase";
import "./modifiers/not";
import "./modifiers/strip";
import "./modifiers/upcase";

import "./directives/attr";
import "./directives/text";

const StimulusX = {
  init,
  modifier,
  directive,
  nextTick,
};

export default StimulusX;

export { nextTick };
