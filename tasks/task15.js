const waitFunction = async (func, ...args) => {
  const result = await func(...args);
  return res;
};

export default waitFunction;
