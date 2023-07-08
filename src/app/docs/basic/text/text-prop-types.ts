import {ComponentPropTypeData} from "@/types/component-prop-type-data";
import {TextProps} from "@flowui/react/basic";

export const TextPropTypes: ComponentPropTypeData<TextProps>[] = [
  {
    name: "as",
    type: "React.ElementType",
    default: '"p"',
    required: false,
    description: "Changes which tag component outputs",
  },
  {
    name: "size",
    type: "TextSize",
    default: '"none"',
    required: false,
    description: "Several options to change the font size like: xs, sm, lg, xl, etc...",
  },
  {
    name: "color",
    type: "Color",
    default: '"none"',
    required: false,
    description: "A property to change the font color",
  },
  {
    name: "weight",
    type: "FontWeight",
    default: '"none"',
    required: false,
    description: "A property to change the font weight "
  },
  {
    name: "align",
    type: "TextAlignment",
    default: '"none"',
    required: false,
    description: "Change the font alignment"
  },
  {
    name: "transform",
    type: "TextTransform",
    default: '"none"',
    required: false,
    description: "Change the font transform-property from several options"
  }
];