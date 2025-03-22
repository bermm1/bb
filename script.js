async function getDog(){
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  document.getElementById('dog').src = data.message;
}
dog.ceo
