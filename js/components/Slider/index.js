const SliderItem = (css, className) => {
  createInjectStyle(css);
  return `<li class="${className}" onclick="handleClick(event)"></li>`;
};

const Slider = (css, content, className) => {
  createInjectStyle(css);
  return `<ul class="${className}">${content}</ul>`;
};

const showItems = (itemStates) => {
  const sliderItem = (position) => SliderItem`
    .item {
      border-radius: 50%;
      list-style: none;
      width: calc(var(--line-height) * 3);
      height: calc(var(--line-height) * 3);
      background-color: var(--slider);
      transition: transform 250ms linear;
      cursor: pointer;
    }
    ${`item pos-${position}`}
  `;

  const sliderItemActive = (position) => SliderItem`
    .item.active {
      transform: scale(1.6);
    }
    ${`item active pos-${position}`}
  `;

  return itemStates
    .map((state, index) =>
      state ? sliderItemActive(index + 1) : sliderItem(index + 1)
    )
    .join("");
};

const replaceCharacter = (icon) => {
  const parser = new DOMParser();

  const { body: { firstChild: character } } = parser.parseFromString(
    WrapperCharacter`
      ${icon}
      ${"selected"}
    `,
    "text/html"
  );

  document
    .querySelector(".selected")
    .replaceWith(character);
}

const handleClick = ({ target }) => {
  const allItems = document.querySelectorAll(".item");
  const action = document.querySelector(".action");

  allItems.forEach((item) => item.classList.remove("active"));
  target.classList.contains("action") ? "" : target.classList.add("active");

  action.classList.remove("second");
  action.classList.remove("third");

  if (target.classList.contains("pos-2")) {
    action.classList.add("second");
    replaceCharacter(iconMedium);
  } else if (target.classList.contains("pos-3")) {
    action.classList.add("third");
    replaceCharacter(iconHard);
  } else {
    replaceCharacter(wrapperCharacterDefault);
  }
};

const sliderAction = SliderItem`
  .action {
    border-radius: 50%;
    position: absolute;
    list-style: none;
    width: calc(var(--line-height) * 4);
    height: calc(var(--line-height) * 4);
    background-color: var(--action);
    left: -5px;
    transition: transform 250ms linear;
  }

  .action.second {
    transform: translateX(730.8%);
  }

  .action.third {
    transform: translateX(1460.8%);
  }
  ${"action"}
`;

const initialState = [true, false, false];
const slider = Slider`
  .slider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: var(--line-height);
    background-color: var(--slider);
  }
  ${showItems(initialState) + sliderAction}
  ${"slider"}
`;

injectElements(slider);
