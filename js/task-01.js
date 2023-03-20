const allCategoriesListEl = document.querySelectorAll('.item');
const numberOfCategories = allCategoriesListEl.length;
console.log(`Number of categories: ${numberOfCategories}`);

allCategoriesListEl.forEach((category) => {
    const titleEl = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('li');
    const numberOfElements = elements.length;
    console.log(`Category: ${titleEl}`);
    console.log(`Elements: ${numberOfElements}`)
});

