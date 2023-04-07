document.addEventListener('DOMContentLoaded', async () => {
  const orderData = document.getElementById('order-data');

  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  const email = urlParams.get('email');
  const phone = urlParams.get('phone');
  const fruits = [urlParams.get('fruit1'), urlParams.get('fruit2'), urlParams.get('fruit3')];
  const special = urlParams.get('special');
  const orderDate = new Date().toLocaleString();
    
  console.log(fruits);

  const response = await fetch('../documents/fruityvice.json');
  const data = await response.json();
  const fruitData = data.fruits;

  const nutritionData = fruits.reduce((acc, fruitName) => {
    const fruit = fruitData.find(f => f.name === fruitName);
    if (fruit) {
      acc.carbohydrates += fruit.nutritions.carbohydrates;
      acc.protein += fruit.nutritions.protein;
      acc.fat += fruit.nutritions.fat;
      acc.sugar += fruit.nutritions.sugar;
      acc.calories += fruit.nutritions.calories;
    }
    return acc;
  }, { carbohydrates: 0, protein: 0, fat: 0, sugar: 0, calories: 0 });

  orderData.innerHTML = `
    <h1>Drink confirmed!</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Order date:</strong> ${orderDate}</p>
    <p><strong>Fruits:</strong> ${fruits.join(', ')}</p>
    <p><strong>Special instructions:</strong> ${special}</p>
    <p><strong>Nutrition:</strong></p>
    <ul>
    <li>Carbohydrates: ${nutritionData.carbohydrates.toFixed(2)}g</li>
    <li>Protein: ${nutritionData.protein.toFixed(2)}g</li>
    <li>Fat: ${nutritionData.fat.toFixed(2)}g</li>
    <li>Sugar: ${nutritionData.sugar.toFixed(2)}g</li>
    <li>Calories: ${nutritionData.calories.toFixed(2)}kcal</li>
    </ul>
  `;
});
