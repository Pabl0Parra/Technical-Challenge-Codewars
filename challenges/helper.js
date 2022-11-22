/**
    This sample implementation of saveOne routine is for
    demonstration purposes only, it is NOT used in tests.
 */

export async function saveOne({ id }) {
  return new Promise((resolve, reject) => {
    const success = Math.random() >= 0.2; // 80% chance of success

    if (success) {
      resolve(id);
    } else {
      reject(`Failed to save ${id}`);
    }
  });
}
