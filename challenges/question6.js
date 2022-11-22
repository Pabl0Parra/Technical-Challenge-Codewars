import { saveOne } from "./helper";

export async function saveAll(records) {
  // empty array to store the rejects
  const fails = [];
  // iterate the array
  for (const record of records) {
    try {
      // await the successes
      await saveOne(record);
      // catch errors
    } catch (e) {
      // push errors into fails array by id
      fails.push(record.id);
    }
  }
  return fails;
}
