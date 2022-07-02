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
        {
            name: "Pale ale",
            amount: 5,
            extraction: 75,
            color: 15,
        }
    ],
    hops: [
        {
            name: "Marynka",
            amount: 30,
            alphaAcids: 17,
            boilingTime: 60,
        },
        {
            name: "Cascade",
            amount: 70,
            alphaAcids: 13,
            boilingTime: 10,
        }
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
        {
            name: "Pale ale",
            amount: 4,
            extraction: 75,
            color: 15,
        },
        {
            name: "Chocolade",
            amount: 1,
            extraction: 70,
            color: 300
        }
    ],
    hops: [
        {
            name: "Cascade",
            amount: 50,
            alphaAcids: 13,
            boilingTime: 60,
        },
        {
            name: "Cascade",
            amount: 50,
            alphaAcids: 13,
            boilingTime: 10,
        },
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
