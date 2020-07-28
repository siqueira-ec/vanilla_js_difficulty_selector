const WrapperCharacter = (css, icon, className) => {
  createInjectStyle(css);
  return `
    <div class="${className}">${icon}</div>
  `;
};

const selectedWrapper = (icon) => WrapperCharacter`
  ${icon}
  ${"wrapperCharacter"}
`;

const pathImages = "assets/images/";
const iconEasy = Character`
  .easy {
    background-color: #55E6C1;
  }
  ${pathImages + "smile-icon.png"}
  ${"character easy"}
`;
const iconMedium = Character`
  .medium {
    background-color: #EAB543;
  }
  ${pathImages + "neutral-icon.png"}
  ${"character medium"}
`;
const iconHard = Character`
  .hard {
    background-color: #FD7272;
  }
  ${pathImages + "angry-icon.png"}
  ${"character hard"}
`;

const wrapperCharacterDefault = selectedWrapper(iconEasy);

injectElements(wrapperCharacterDefault);
