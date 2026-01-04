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
          ${capsula.location}
        </div>
      </li>`;
}

export function createTemplateCapsules(capsules: Capsula[]) {
  return capsules.map(createTemplateCapsula).join("");
}

export function createTemplateCapsulaModal(capsula: Capsula) {
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
  <a class="modal-location" href="">${capsula.location}</a>
</div>`;
}
