const Title = (css, title, className) => {
  createInjectStyle(css);
  return `
    <h1 class="${className}">
      ${title}
    </h1>
  `;
};
