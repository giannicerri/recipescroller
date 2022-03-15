recipe_container_selectors = [
    '.recipe-callout',
    '.tasty-recipes',
    '.easyrecipe',
    '.innerrecipe',
    '.recipe-summary.wide', // thepioneerwoman.com
    '.wprm-recipe-container', //many wordpress sites use this plugin
    '.recipe-content',
    '.simple-recipe-pro',
    '.mv-recipe-card',
    '.recipe-shopper-wrapper', //Allrecipes
    '.recipe__main-content', //Conde Nast (Bon Appetit, Epicurious)
    '.recipe-lead', //Food Network
    '.pure-u-1.pure-u-lg-17-24.pure-u-xl-17-24', //Taste of Home, this one's fucky
    '#structured-project-content_1-0', //simplyrecipes, this one catches on the spruce selector tho
    '#article-content-container_1-0', //thespruceeats
    '.jsx-1833857252.Recipe', //theKitchn
    'div[itemtype="http://schema.org/Recipe"]', //Cookpad
    'div[itemtype="https://schema.org/Recipe"]',
]
//Doesn't work on: themodernproper, foodandwine, delish, bbcgoodfood, taste.com, tablespoon, food52, barefoot contessa


function scrollToRecipe() {
    for (let i = 0; i < recipe_container_selectors.length; i++) {
        let recipe = document.querySelector(recipe_container_selectors[i]);
        console.log(recipe_container_selectors[i]);
        if (recipe) {
            //let recipeElement = document.getElementById(recipe.id);
            let recipeElement = document.getElementsByClassName(recipe.className)[0];
            console.log(recipeElement)

            recipeElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            break;
        }
    }
}
//var element = document.getElementById(document.querySelector('[id^="wprm-recipe-container-"]').id);
//element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

scrollToRecipe();
chrome.storage.sync.get("recipeSetting", (data) => {
    console.log(data.recipeSetting);
});