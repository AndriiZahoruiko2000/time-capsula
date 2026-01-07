import { msToTime } from "./helpers/converter";
import { refs } from "./helpers/refs";
import {
  createTemplateCapsula,
  createTemplateCapsulaModal,
  createTemplateCapsules,
} from "./helpers/render-function";
import {
  deleteCapsula,
  getCapsula,
  getCapsulaById,
} from "./services/capsules-service";
import { api } from "./services/server-config";
import type { Capsula } from "./types/capsules";

let intervalid: number;
let index: number;

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
  checkModalStatus(response);
});

function checkModalStatus(capsula: Capsula) {
  const timer = refs.capsulaModalDetails?.querySelector(".js-timer");
  if (!timer) return;
  intervalid = setInterval(() => {
    const currentData = new Date();
    const capsulaTime = new Date(capsula.timeToOpen);
    const diff = capsulaTime.getTime() - currentData.getTime();
    timer.textContent = msToTime(diff);
    console.log(diff);
  }, 1000);
}

refs.capsulaModalBackdrop?.addEventListener("click", (e) => {
  const elTarget = e.target as HTMLElement;
  console.log(elTarget);

  const nodename = elTarget.nodeName;
  if (!elTarget.classList.contains("modal-close")) return;
  refs.capsulaModalBackdrop?.classList.remove("is-open");
  clearInterval(intervalid);
});

refs.capsulaModalDetails?.addEventListener("click", async (e) => {
  const el = e.target as HTMLElement;

  if (!el.classList.contains("delete-capsula-btn")) {
    return;
  }

  const id = el.dataset.id as string;
  const response = await deleteCapsula(id);
  const liEl = refs.capsulaList?.querySelector(`[data-id="${id}"]`);
  liEl?.remove();
});

refs.capsulaList?.addEventListener("click", (e) => {
  const elTarget = e.target as HTMLElement;
  const liEl = elTarget.closest("li");
  if (!liEl) return;
  const liId = liEl.dataset.id;
  index = [...(refs.capsulaList?.children || [])].findIndex((el) => {
    const item = el as HTMLLIElement;
    return item.dataset.id === liId;
  });
});

refs.nextButton?.addEventListener("click", (e) => {
  const count = refs.capsulaList?.children.length || 0;
  if (index < count) {
    index += 1;
  }
});

refs.prevButton?.addEventListener("click", (e) => {
  if (index > 0) {
    index -= 1;
  }
});
