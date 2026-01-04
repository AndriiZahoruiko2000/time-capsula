import { refs } from "./helpers/refs";
import {
  createTemplateCapsula,
  createTemplateCapsulaModal,
  createTemplateCapsules,
} from "./helpers/render-function";
import { getCapsula, getCapsulaById } from "./services/capsules-service";

document.addEventListener("DOMContentLoaded", async (e) => {
  const response = await getCapsula();
  console.log(response);

  const markup = createTemplateCapsules(response.capsules);
  if (refs.capsulaList) {
    refs.capsulaList.innerHTML = markup;
  }
});

refs.capsulaList?.addEventListener("click", async (e) => {
  const elTarget = e.target as HTMLElement;
  const nodename = elTarget.nodeName;
  if (nodename !== "LI") {
    return;
  }
  const liEl = elTarget.closest("li");
  const elId = liEl?.dataset.id as string;
  const response = await getCapsulaById(elId);
  const markup = createTemplateCapsulaModal(response);
  if (refs.capsulaModalDetails) {
    refs.capsulaModalDetails.innerHTML = markup;
  }
  refs.capsulaModalBackdrop?.classList.add("is-open");
});

refs.capsulaModalBackdrop?.addEventListener("click", (e) => {
  const elTarget = e.target as HTMLElement;
  console.log(elTarget);

  const nodename = elTarget.nodeName;
  if (nodename !== "BUTTON") return;
  refs.capsulaModalBackdrop?.classList.remove("is-open");
});

refs.nextButton?.addEventListener("click", (e) => {});

refs.prevButton?.addEventListener("click", (e) => {});
