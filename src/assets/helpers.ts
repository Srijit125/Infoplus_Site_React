/* ── File → base64 ─────────────────────────────────── */
type Base64DataUrl = `data:${string};base64,${string}`;

const isBase64DataUrl = (v: string): v is Base64DataUrl =>
  /^data:[^;,]*;base64,/.test(v);

export function fileToBase64(file: Blob): Promise<Base64DataUrl> {
  return new Promise<Base64DataUrl>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const { result } = reader;
      if (typeof result !== "string" || !isBase64DataUrl(result)) {
        reject(new Error("Failed to read file as a base64 data URL"));
        return;
      }
      resolve(result);
    };
    reader.onerror = () =>
      reject(reader.error ?? new Error("Unknown FileReader error"));
    reader.onabort = () => reject(new Error("File read aborted"));

    reader.readAsDataURL(file);
  });
}

export async function fileToBase64Raw(file: Blob): Promise<string> {
  const dataUrl = await fileToBase64(file);
  const [, payload] = dataUrl.split(",", 2) as [string, string];
  return payload;
}
