setTitle = (title) => {
  let base = 'Noodle Hub';

  if (title) {
    return document.title = `${title} - ${base}`;
  }
  return document.title = base;
};