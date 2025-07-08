import z from "zod";
import { ProcessServerData } from "./ProcessData";

const vinylSchema = z.object({
  id: z.string(),
  title: z.string(),
  artist: z.string(),
  color: z.string(),
  price: z.number(),
  discount: z.number(),
  quantity: z.number(),
  fontColor: z.string(),
});
export type Vinyl = z.infer<typeof vinylSchema>;

const vinylsArraySchema = z.array(vinylSchema);
export type VinylArray = z.infer<typeof vinylsArraySchema>;

export async function GetVinylsArray(): Promise<VinylArray> {
  return fetch(`/api/vinyls`)
    .then(ProcessServerData)
    .then((response) => response.json())
    .then((data) => vinylsArraySchema.parse(data));
}
