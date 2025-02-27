import express, { Request, Response } from "express";

// ==== Type Definitions, feel free to add or modify ==========================
interface cookbookEntry {
  name: string;
  type: string;
}

interface requiredItem {
  name: string;
  quantity: number;
}

interface recipe extends cookbookEntry {
  requiredItems: requiredItem[];
}

interface ingredient extends cookbookEntry {
  cookTime: number;
}

// =============================================================================
// ==== HTTP Endpoint Stubs ====================================================
// =============================================================================
const app = express();
app.use(express.json());

// Store your recipes here!
const cookbook: any = [];

// Task 1 helper (don't touch)
app.post("/parse", (req:Request, res:Response) => {
  const { input } = req.body;

  const parsed_string = parse_handwriting(input)
  if (parsed_string == null) {
    res.status(400).send("this string is cooked");
    return;
  } 
  res.json({ msg: parsed_string });
  return;
  
});

// [TASK 1] ====================================================================
// Takes in a recipeName and returns it in a form that 
const parse_handwriting = (recipeName: string): string | null => {
  // TODO: implement me
  recipeName = recipeName.replace(/[-_]/g, " ");
  recipeName = recipeName.replace(/[^a-zA-Z ]/g, "");
  let newString = "";
  let prev = null;
  for (const letter of recipeName) {
    if (prev == null) {
      newString += letter.toUpperCase();
    } else if (prev == " " && letter >= 'a' && letter <= 'z') {
      newString += letter.toUpperCase();
    } else if (prev !== " " && letter >= 'A' && letter <= 'Z') {
      newString += letter.toLowerCase();
    } else {
      newString += letter;
    }
    prev = letter;
  }
  if (newString.length > 0) {
    return newString;
  }
  return null;
}

// [TASK 2] ====================================================================
// Endpoint that adds a CookbookEntry to your magical cookbook
app.post("/entry", (req:Request, res:Response) => {
  // TODO: implement me
  const { type, name } = req.body;

  for (const entry of cookbook) {
    if (entry.name === name) {
      res.status(400).send("don't put the same name or thing!");
      return;
    }
  }
  if (type === "ingredient") {
    const { cookTime } = req.body;
    if (cookTime < 0) {
      res.status(400).send("cookTime must be great or equal to 0!");
      return;
    }
    let newIngredient: ingredient = {
      type,
      name,
      cookTime
    }
    cookbook.push(newIngredient);
    res.status(200).send({});

  } else if (type === "recipe") {
    const { requiredItems } = req.body;
    for (const item of requiredItems) {
      const filteredList = requiredItems.filter(entry => entry.name === item.name);
      if (filteredList.length > 1) {
        res.status(400).send("there are multiple of the same required items!");
        return;
      }
    }
    let newRecipe: recipe = {
      type,
      name,
      requiredItems
    }
    cookbook.push(newRecipe);
    res.status(200).send({});

  } else {
    res.status(400).send("that's not an ingredient or recipe!")
    return;
  }
});

// [TASK 3] ====================================================================
// Endpoint that returns a summary of a recipe that corresponds to a query name
app.get("/summary", (req:Request, res:Request) => {
  // TODO: implement me
  const { name } = req.query;
  if (!cookbook.some(entry => entry.type === "recipe" && entry.name === name)) {
    res.status(400).send("recipe not found or is an ingredient!")
    return;
  }
  let initialRecipe = {
    name: name,
    quantity: 1
  }
  let entryList = []
  entryList.push(initialRecipe);
  let summary = {
    name: name,
    cookTime: 0,
    ingredients: []
  }
  while (entryList.length != 0) {
    //entry contains an item with name and quantity
    let entry = entryList[0];
    const item = cookbook.find(recipe => recipe.name === entry.name);
    if (item === undefined) {
      res.status(400).send("item does not exist lol");
      return;
    }
    if (item.type === undefined) {
      res.status(400).send("not yet implemented!")
      return;
      
    } else if (item.type === "ingredient") {
      //If the entry is an ingredient and in the cookbook then check if it's in
      //the summary ingredient list
      let ingredientRecipe = summary.ingredients.find(recipe => recipe.name === entry.name);
      summary.cookTime += (item.cookTime * entry.quantity);
      if (ingredientRecipe === undefined) {
        summary.ingredients.push(entry);
      } else {
        ingredientRecipe.quantity += entry.quantity;
      }
      entryList.splice(0, 1)

    } else if (item.type === "recipe") {
      for (const ingredients of item.requiredItems) {
        entryList.push(ingredients);
      }
      entryList.splice(0, 1)
    } else {
      res.status(400).send("not");
      return;
    }
  }
  res.status(200).send(summary);
});

// =============================================================================
// ==== DO NOT TOUCH ===========================================================
// =============================================================================
const port = 8080;
app.listen(port, () => {
  console.log(`Running on: http://127.0.0.1:8080`);
});
