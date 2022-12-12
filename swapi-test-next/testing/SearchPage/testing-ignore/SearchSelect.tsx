import React, { useState } from 'react';
import Select, { ActionMeta, StylesConfig, GroupBase, ControlProps, components, GroupProps } from 'react-select';

interface TypeOption {
    readonly value: string;
    readonly label: string;
    readonly isFixed?: boolean;
  }

const typeOptions: readonly TypeOption[] | any  = [
  { value: 'films', label: 'Films' },
  { value: 'characters', label: 'Characters' },
  { value: 'starships', label: 'Starships' },
  { value: 'vehicles', label: 'Vehicles' },
  { value: 'starships', label: 'Planets' },
  { value: 'species', label: 'Species' },
];

export default function CustomSelect({ handleSelectChange }: any) {
//   const [selectedOption, setSelectedOption] = useState(null);

const controlStyles: any = {
  border: '1px solid black',
  padding: '2px',
  background: 'transparent',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
};

const ControlComponent = (props: ControlProps<TypeOption, false>) => (
  <div style={controlStyles}>
    <p>Custom Control</p>
    <components.Control {...props} />
  </div>
);

const groupStyles = {
  border: `2px dotted black`,
  borderRadius: '5px',
  background: 'yellow',
};

const Group = (props: GroupProps<TypeOption, false>) => (
  <div style={groupStyles}>
    <components.Group {...props} />
  </div>
);


  return (
    <div className="customSelect">
      <Select
        className="typeSelectMain"
        // classNamePrefix="typeSelect"
        styles={{
          control: (baseStyles, state) => ({
            // ...baseStyles,
            // borderColor: state.isFocused ? 'grey' : 'red',
            color: 'white',
            width: '10vw',
          }),
          option: (baseStyles) => ({
            color: 'black',
            width: '10vw',
          }),
        }}
        components={{ Control: ControlComponent, Group }}
        onChange={() => {handleSelectChange}}
        options={typeOptions}
        defaultValue={typeOptions[0]}
      />
    </div>
  );
}

