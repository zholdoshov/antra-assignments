export async function getBooksByName(name) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${name}&startIndex=0&maxResults=20`
  );
  const data = await response.json();
  return data.items;
}
