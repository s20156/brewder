import { Malt } from "../interfaces/interface";

export const calculateBlgPerMalt = (malt: Malt) => {
    return (malt.amount * malt.extraction * 0.8);
}

export const calculateBlg = (malts: Malt[]) => {
    return malts.map((item) => {
        return calculateBlgPerMalt(item);
    }).reduce((prev, next) => prev + next);
}
