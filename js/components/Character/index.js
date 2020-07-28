function Character(css, path, className) {
  createInjectStyle(css);

  return `
    <img class="${className}" src="${path}" />
  `;
}
