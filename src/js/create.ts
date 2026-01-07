import { loadFromLs } from "./helpers/local-storage";
import { refs } from "./helpers/refs";
import { createTemplateCapsula } from "./helpers/render-function";
import { createCapsule } from "./services/capsules-service";
import type { NewCapsula } from "./types/capsules";
import type { User } from "./types/users";

refs.createCapsulaForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  const lon = Number(formData.get("lon"));
  const lat = Number(formData.get("lat"));
  const country = formData.get("country") as string;
  const city = formData.get("city") as string;
  const openTime = formData.get("open-time") as string;
  const title = formData.get("title") as string;
  const message = formData.get("message") as string;
  const lsData = loadFromLs<{ user: User }>("LOGIN_USER_INFO");
  if (!lsData) return;
  const { user } = lsData;

  const carsulaData: NewCapsula = {
    userId: user._id,
    location: {
      lon,
      lat,
      country,
      city,
    },
    timeToOpen: openTime,
    title,
    message,
  };

  const response = await createCapsule(carsulaData);
  form.reset();
});
