import type { Capsula } from "../types/capsules";

export function createTemplateCapsula(
  capsula: Capsula,
  index: number,
  array: Capsula[]
) {
  return ` <li class="capsula-card" data-id="${capsula._id}">
        <div class="capsula-card__top">
          <a class="capsula-title" href="">${capsula.title}</a>
          <span class="capsula-tag">Private</span>
        </div>
        <p class="capsula-text">
          ${capsula.message}
        </p>
        <div class="capsula-meta">
          <span class="capsula-meta__label">Time to Open</span>
          <span class="capsula-meta__value">${capsula.timeToOpen}</span>
        </div>
        <div class="capsula-map">
        <gmp-map
            center="${capsula.location.lat}, ${capsula.location.lon}"
            zoom="10"
            map-id="DEMO_MAP_ID"
            class="js-map map-canvas"
          >
             <gmp-advanced-marker position="${capsula.location.lat}, ${capsula.location.lon}" title="${capsula.title}">
    <img
      class="flag-icon"
      src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    />
  </gmp-advanced-marker>
          </gmp-map>
         
        </div>
      </li>`;
}

export function createTemplateCapsules(capsules: Capsula[]) {
  return capsules.map(createTemplateCapsula).join("");
}

export function createTemplateCapsulaModal(capsula: Capsula) {
  const currentTime = new Date();
  const capsulaTime = new Date(capsula.timeToOpen);

  if (capsulaTime > currentTime) {
    return `<div class="modal-card">
    <button class="modal-close" type="button" aria-label="Close modal">x</button>
  <div class="modal-meta">
  
    <span class="modal-meta__label">Time to Open</span>
    <span class="js-timer modal-meta__value">00:00:00</span>
  </div>
  <button class="delete-capsula-btn" data-id="${capsula._id}">Delete Capsula</button>
</div>`;
  } else {
    return `<div class="modal-card">
  <div class="modal-header">
    <h3 class="modal-title">${capsula.title}</h3>
    <button class="modal-close" type="button" aria-label="Close modal">x</button>
  </div>
  <p class="modal-message">${capsula.message}</p>
  <div class="modal-meta">
    <span class="modal-meta__label">Time to Open</span>
    <span class="modal-meta__value">${capsula.timeToOpen}</span>
  </div>
  <a class="modal-location" href="">${capsula.location.lat}, ${capsula.location.lon}</a>
  <button class="delete-capsula-btn" data-id="${capsula._id}">Delete Capsula</button>
</div>`;
  }
}

export function createTemplateFlag(capsula: Capsula) {
  return `
  <gmp-advanced-marker position="${capsula.location.lat}, ${capsula.location.lon}" title="${capsula.title}">
    <img
      class="flag-icon"
      src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    />
  </gmp-advanced-marker>
`;
}

export function createTemplateFlags(cpasules: Capsula[]) {
  return cpasules.map(createTemplateFlag).join("");
}
