import { BACKEND_ENDPOINT } from "~/lib/env";

export const normalizeImageUri = (
  imageId: string | null | undefined,
): string | undefined => {
  const targetImgPath = !imageId
    ? undefined
    : imageId.startsWith("/")
      ? BACKEND_ENDPOINT + imageId
      : imageId;
  // console.log({ imageId, targetImgPath })
  return targetImgPath;
};
