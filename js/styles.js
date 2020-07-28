const css = `
  :root {
    --line-height: 10px;
    --yellow-color: #EAB543;
    --action-color: #F8EFBA;
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #2C3A47;
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
    box-sizing: border-box;
    font-family: 'Press Start 2P', cursive;
    background-color: #3B3B98;
    width: 40vw;
    min-width: 768px;
    height: 65vh;
    text-align: center;
    padding: 4rem 0;
  }
  .wrapperCharacter {
    display: flex;
    justify-content: space-evenly;
  }
  .character {
    width: 130px;
    border-radius: 50%;
  }
`;

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

createInjectStyle(css);
