export const normalizeImageUri = (
  imageId: string | null | undefined,
): string | undefined => {
  const targetImgPath = !imageId
    ? undefined
    : imageId.startsWith("/")
      ? imageId
      : imageId;
  // console.log({ imageId, targetImgPath })
  return targetImgPath;
};
