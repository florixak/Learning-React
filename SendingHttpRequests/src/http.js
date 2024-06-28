export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    // 200, 300 (status code if successful); 400, 500 (if unsuccessful)
    throw new Error("Failed to fetch places.");
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places: places /* or just: places (same name) */ }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    // 200, 300 (status code if successful); 400, 500 (if unsuccessful)
    throw new Error("Failed to update user data.");
  }

  return resData.message;
}
