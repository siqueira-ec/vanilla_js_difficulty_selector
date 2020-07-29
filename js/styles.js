const injectElements = (
  element,
  reference = "root",
  position = "beforeend"
) => {
  const ref = document.querySelector(`#${reference}`);
  ref.insertAdjacentHTML(position, element);
};

const createInjectStyle = (css) => {
  const estilo =
    typeof css === "string"
      ? css.replace(/\n/gm, "")
      : css[0].replace(/\n/gm, "").trim();
  const head = document.querySelector("head");
  estilo !== ""
    ? head.insertAdjacentHTML("beforeend", `<style>${estilo}</style>`)
    : null;
};

const css = `
  :root {
    --line-height: 10px;
    --slider: #EAB543;
    --action: #F8EFBA;
    --title: #82589F;
    --body: #2C3A47;
    --root: #3B3B98;
    --easy: #55E6C1;
    --medium: #F0C808;
    --hard: #FD7272;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: var(--body);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: 'Press Start 2P', cursive;
    background-color: var(--root);
    width: 40vw;
    min-width: 768px;
    max-height: 560px;
    height: 70vh;
    min-height: 352px;
    max-width: 768px;
    text-align: center;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  .character {
    width: 130px;
    border-radius: 50%;
  }
  @media (max-width: 768px) {
    #root {
      width: 40vw;
      min-width: 370px;
      height: 70vh;
      min-height: 415px;
    }
  }
`;

createInjectStyle(css);
