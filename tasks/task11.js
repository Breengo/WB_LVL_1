const closure = () => {
  let counter = 0;
  return function increase() {
    return counter++;
  };
};

export default closure;
