import { refs } from "./helpers/refs";
import { createTemplateFlags } from "./helpers/render-function";
import { getCapsula } from "./services/capsules-service";

document.addEventListener("DOMContentLoaded", async (e) => {
  const response = await getCapsula();

  const markup = createTemplateFlags(response.capsules);
  if (refs.mapList) {
    refs.mapList.innerHTML = markup;
  }
});
