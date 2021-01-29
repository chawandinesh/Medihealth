import React from 'react';
import {View, Text} from 'react-native';
export const MedihealthContext = React.createContext();
const initialData = {
  DailyMedicine: [],
  Headache: [],
  Fever: [],
  Burn: [],
  LegPains: [],
  Rashes: [],
  Alergy: [],
};
export default function context(props) {
  const [state, setState] = React.useState(initialData);
  return (
    <MedihealthContext.Provider value={{state, setState}}>
      {props.children}
    </MedihealthContext.Provider>
  );
}
