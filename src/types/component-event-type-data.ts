export type ComponentEventTypeData<T> = {
  name: keyof T;
  type: string;
  required: boolean;
  description: string;
};
