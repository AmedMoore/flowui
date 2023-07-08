export type ComponentPropTypeData<T> = {
  name: keyof T;
  type: string;
  default: string;
  required: boolean;
  description: string;
};
