import z from "zod";
import { ProcessServerData } from "./ProcessData";

const vinillaSchema = z.object({
  id: z.string(),
  title: z.string(),
  artist: z.string(),
  color: z.string(),
  price: z.number(),
  discount: z.number(),
  quantity: z.number(),
  fontColor: z.string(),
});
export type Vinilla = z.infer<typeof vinillaSchema>;

const vinillasArraySchema = z.array(vinillaSchema);
export type VinillaArray = z.infer<typeof vinillasArraySchema>;

export async function GetVinillasArray(): Promise<VinillaArray> {
  return fetch(`/api/vinillas`)
    .then(ProcessServerData)
    .then((response) => response.json())
    .then((data) => vinillasArraySchema.parse(data));
}
