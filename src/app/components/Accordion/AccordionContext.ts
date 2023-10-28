import { createContext } from 'react';

export const AccordionContext = createContext({
  isOpen: false,
  id: '',
  handleToggle: (id: string | number):void => {},
})