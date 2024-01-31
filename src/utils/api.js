// const baseUrl = "http://localhost:3001";
export const getItems = () => {
  return fetch(`http://localhost:3001/items`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

// //  GET request
// fetch(`${"http://localhost:3001"}/items`)
//   .then((response) => response.json())
//   .then((data) => console.log("GET response:", data))
//   .catch((error) => console.error("GET error:", error));

export const addItems = (data) => {
  // POST request
  return fetch(`${"http://localhost:3001"}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

// DELETE request
// fetch(`${"http://localhost:3001"}/items/${card}`, {
//   method: "DELETE",
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     console.log("DELETE success");
//   })
//   .catch((error) => console.error("DELETE error:", error));
