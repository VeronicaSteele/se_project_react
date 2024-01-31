// const baseUrl = "http://localhost:3001";
// //  GET request
export const getItems = () => {
  return fetch(`http://localhost:3001/items`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

// POST request
export const addItems = (data) => {
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
export const deleteItems = (id) => {
  return fetch(`${"http://localhost:3001"}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(data),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};
