// index.d.ts

declare module 'jie-fstln-story-component' {
  import { InputHTMLAttributes } from 'react';

  // 定义 Input 组件的类型
  export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

  export const Input: React.FC<InputProps>;
  
  // 根据导出的其他组件，依次定义类型
  // export const Button: React.FC<ButtonProps>;
  // export const Modal: React.FC<ModalProps>;
  // ...

  // 或者你可以直接导入 shadcn/ui 的类型并重新导出
}