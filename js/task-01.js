const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);
allCategories.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
});
