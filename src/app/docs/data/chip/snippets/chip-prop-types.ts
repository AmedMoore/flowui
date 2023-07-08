import {ComponentPropTypeData} from "@/types/component-prop-type-data";
import {ChipProps} from "@flowui/react/data";

export const ChipPropTypes: ComponentPropTypeData<ChipProps>[] = [
  {
    name: "color",
    default: '"basic"',
    type: 'Color',
    required: false,
    description: 'property to change the chip background color',
  },
  {
    name: "size",
    default: '"md"',
    type: 'Size',
    required: false,
    description: 'property to change the Chip element size',
  }
]