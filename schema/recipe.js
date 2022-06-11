import mongoose from "mongoose"

const recipeSchema = new mongoose.Schema({
    title: { type: String },
    serving: { type: !Number },
    level: { type: !String },
    cooktime: { type: !Number },
    ingredients: { type: !String },
    description: { type: !String },
    method: { type: !String },
    photo: { type: !String },
    own: { type: String }
})
recipeSchema.index({title: 'text'})
export default mongoose.model("Recipe", recipeSchema)