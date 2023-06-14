import React from 'react';

type ButtonProps = {
  name: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<ButtonProps> = ({ onClick, name }) => {
  console.log('Button rendered.');
  return <button onClick={onClick}>{name}</button>;
};

export default Button;
