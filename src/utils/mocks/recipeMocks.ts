import { RecipeCardProps } from "../../components/recipes/RecipeCard/RecipeCard";
import { RecipeCardsProps } from "../../components/recipes/RecipeCards/RecipeCards";

const recipe1: RecipeCardProps = {
    id: 11,
    name: "Bloody good IPA",
    beerStyle: "IPA",
    blg: 15.1,
    ibu: 70,
    color: 36,
    malts: [
        "Pale ale: 5kg",
    ],
    hops: [
        "Marynka: 30g",
        "Cascade: 70g"
    ],
    additives: [
        "",
    ],
    yeast: [
        "Pale Ale Yeast",
    ]
}

const recipe2: RecipeCardProps = {
    id: 12,
    name: "Black IPA",
    beerStyle: "Black IPA",
    blg: 16.1,
    ibu: 40,
    color: 360,
    malts: [
        "Pale ale: 4kg",
        "Chocolate: 1kg"
    ],
    hops: [
        "Marynka: 30g",
        "Cascade: 20g"
    ],
    additives: [
        "",
    ],
    yeast: [
        "Pale Ale Yeast",
    ]
}

export const recipeMock: RecipeCardsProps = {
    recipeCards: [
        recipe1,
        recipe2
    ]
}