let nextId = 0;
export const addClass = (text) => ({
  type: 'ADD_CLASS',
  id: nextId++,
  text
});
