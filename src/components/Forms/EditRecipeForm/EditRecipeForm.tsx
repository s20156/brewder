import { Form, Formik } from "formik";
import React, { useState } from "react";
import { RouteProps } from "react-router";
import { Input } from "../../dataEntry/Input/Input";
import Button from "../../interaction/Button";
import { RecipeCardProps } from "../../recipes/RecipeCard/RecipeCard";
import { Hop, Malt } from "../../../utils/interfaces/interface";

const initialValues: RecipeCardProps = {
    id: 0,
    name: "",
    beerStyle: "",
    blg: 0,
    ibu: 0,
    color: 0,
    malts: [],
    hops: [],
    additives: [],
    yeast: []
}


export const EditRecipeForm: React.FC<RouteProps> = () => {
    const [ currentBlg ] = useState<number>(initialValues.blg);
    const [ currentIbu ] = useState<number>(initialValues.ibu);
    const [ currentMalts, setCurrentMalts ] = useState<Malt[]>(initialValues.malts);
    const [ currentHops, setCurrentHops ] = useState<Hop[]>(initialValues.hops);
    const [ currentAdditives, setCurrentAdditives ] = useState<string[]>(initialValues.additives);
    const [ currentYeast, setCurrentYeast ] = useState<string[]>(initialValues.yeast);
    const submitForm = (data: RecipeCardProps) => {
        console.log(data);
    }

    return (
        <div className="editRecipe">
            <h3>Add recipe</h3>
            <Formik
                enableReinitialize
                onSubmit={submitForm}
                initialValues={initialValues}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    setFieldValue
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            name="name"
                            labelText="Recipe name"
                            onChange={handleChange}
                            defaultValue={values.name}
                        />
                        <div className="parametersWrapper">
                            <h3>Parameters</h3>
                            <div className="parametersRows">
                                <p>BLG: {currentBlg}</p>
                                <p>IBU: {currentIbu}</p>
                            </div>
                        </div>
                        <div className="ingredientsWrapper">
                            <h3>Malts</h3>
                            {currentMalts.map((item, index) => (
                                <div className={`ingredient malt-${index}`}>
                                    <Input
                                        type="text"
                                        name="name"
                                        labelText="Malt Type"
                                        onChange={handleChange}
                                    />
                                    <Input
                                        type="number"
                                        name="amount"
                                        labelText="Amount"
                                        onChange={handleChange}
                                    />
                                    <Input
                                        type="number"
                                        name="extraction"
                                        labelText="Extraction"
                                        onChange={handleChange}
                                    />
                                    <Input
                                        type="number"
                                        name="color"
                                        labelText="Color"
                                        onChange={handleChange}
                                    />
                                </div>
                            ))}
                            <Button className="plusButton" onClick={() => setCurrentMalts([...currentMalts, {name: "", amount: 0, extraction: 0, color: 0}])} label="Add Malt" />
                        </div>
                        <div className="ingredientsWrapper">
                            <h3>Hops</h3>
                            {currentHops.map((item, index) => (
                                <div key={index} className={`ingredient hop-${index}`}>
                                    <Input
                                        type="text"
                                        name="name"
                                        labelText="Hop Type"
                                        onChange={handleChange}
                                    />
                                    <Input
                                        type="number"
                                        name="amount"
                                        labelText="Amount"
                                        onChange={handleChange}
                                    />
                                    <Input
                                        type="number"
                                        name="alphaAcids"
                                        labelText="Alpha Acids:"
                                        onChange={handleChange}
                                    />
                                    <Input
                                        type="number"
                                        name="boilingTime"
                                        labelText="Boiling Time"
                                        onChange={handleChange}
                                    />
                                </div>
                            ))}
                            <Button className="plusButton" onClick={() => setCurrentHops([...currentHops, {name: "", amount: 0, alphaAcids: 0, boilingTime: 0}])} label="Add Hops" />
                        </div>
                        <div className="ingredientsWrapper">
                            <h3>Additives</h3>
                            {currentAdditives.map((item, index) => (
                                <div key={index} className={`ingredient hop-${index}`}>
                                    <Input
                                        type="text"
                                        name="additive"
                                        labelText="Additive"
                                        onChange={handleChange}
                                    />
                                </div>
                            ))}
                            <Button className="plusButton" onClick={() => setCurrentAdditives([...currentAdditives, ""])} label="Add Additives" />
                        </div>
                        <div className="ingredientsWrapper">
                            <h3>Yeast</h3>
                            {currentYeast.map((item, index) => (
                                <div key={index} className={`ingredient hop-${index}`}>
                                    <Input
                                        type="text"
                                        name="yeast"
                                        labelText="Yeast"
                                        onChange={handleChange}
                                    />
                                </div>
                            ))}
                            <Button className="plusButton" onClick={() => setCurrentYeast([...currentYeast, ""])} label="Add Yeast" />
                        </div>
                        <Button onClick={handleSubmit} className="submitButton" label="Submit Recipe" />
                    </Form>
                )}
            </Formik>
        </div>
        
    )
}
