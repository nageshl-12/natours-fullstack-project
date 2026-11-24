export async function getTours() {
  const res = await fetch('http://127.0.0.1:3000/api/v1/tours');
  const data = await res.json();
  console.log(data);
  return data;
}
