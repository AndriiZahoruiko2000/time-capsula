export function saveToLs(key: string, value: any) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

export function loadFromLs<T>(key: string): T | undefined {
  const info = localStorage.getItem(key) || "";
  try {
    const parsedInfo = JSON.parse(info) as T;
    return parsedInfo;
  } catch {
    console.log(info);
  }
}
