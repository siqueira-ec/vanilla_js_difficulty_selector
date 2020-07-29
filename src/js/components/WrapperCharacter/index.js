const WrapperCharacter = (css = "", icon, className) => {
  createInjectStyle(css);
  return `
    <div class="${className}">${icon}</div>
  `;
};

const iconEasy = Character`
  .easy {
    background-color: var(--easy);
  }
  ${pathImages + "smile-icon.png"}
  ${"character easy"}
`;

const iconMedium = Character`
  .medium {
    background-color: var(--medium);
  }
  ${pathImages + "neutral-icon.png"}
  ${"character medium"}
`;

const iconHard = Character`
  .hard {
    background-color: var(--hard);
  }
  ${pathImages + "angry-icon.png"}
  ${"character hard"}
`;

const wrapperCharacterDefault = WrapperCharacter`
  ${iconEasy}
  ${"selected"}
`;

injectElements(wrapperCharacterDefault);
