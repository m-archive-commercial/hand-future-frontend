import { atomWithStorage } from "jotai/utils";
import { z } from "zod";

export const apiVersionSchema = z
  .union([z.literal("v1"), z.literal("v2")])
  .default("v2");
export type ApiVersion = z.infer<typeof apiVersionSchema>;

export const apiVersionAtom = atomWithStorage<ApiVersion>("api.version", "v2");
