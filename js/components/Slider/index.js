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
      background-color: var(--yellow-color);
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

const handleClick = ({ target }) => {
  const allItems = document.querySelectorAll(".item");
  const action = document.querySelector(".action");

  allItems.forEach((item) => item.classList.remove("active"));
  target.classList.contains("action") ? "" : target.classList.add("active");

  action.classList.remove("second");
  action.classList.remove("third");

  const parser = new DOMParser();

  if (target.classList.contains("pos-2")) {
    action.classList.add("second");
    const wrapperMedium = parser.parseFromString(
      selectedWrapper(iconMedium),
      "text/html"
    );

    document
      .querySelector(".wrapperCharacter")
      .replaceWith(wrapperMedium.body.firstChild);
  } else if (target.classList.contains("pos-3")) {
    action.classList.add("third");
    const wrapperHard = parser.parseFromString(
      selectedWrapper(iconHard),
      "text/html"
    );

    document
      .querySelector(".wrapperCharacter")
      .replaceWith(wrapperHard.body.firstChild);
  } else {
    const wrapperDefault = parser.parseFromString(
      wrapperCharacterDefault,
      "text/html"
    );

    document
      .querySelector(".wrapperCharacter")
      .replaceWith(wrapperDefault.body.firstChild);
  }
};

const sliderAction = SliderItem`
  .action {
    border-radius: 50%;
    position: absolute;
    list-style: none;
    width: calc(var(--line-height) * 4);
    height: calc(var(--line-height) * 4);
    background-color: var(--action-color);
    left: -5px;
    transition: transform 250ms linear;
  }

  .action.second {
    transform: translateX(730%);
  }

  .action.third {
    transform: translateX(1460%);
  }
  ${"action"}
`;

const states = [true, false, false];
const slider = Slider`
  .slider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: var(--line-height);
    background-color: var(--yellow-color);
  }
  ${showItems(states) + sliderAction}
  ${"slider"}
`;

injectElements(slider);
document.querySelector(".slider").id = "slider";
