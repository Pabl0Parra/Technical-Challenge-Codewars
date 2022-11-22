import { saveOne } from "./helper";

export async function saveAll(records) {
  // initialize empty fails array
  const fails = [];
  // iterate the array
  for (const record of records) {
    try {
      // returns an empty list if all records were saved
      await saveOne(record);
      // catch errors
    } catch (e) {
      // returns list of ids of records that failed to save
      fails.push(record.id);
    }
  }
  return fails;
}
