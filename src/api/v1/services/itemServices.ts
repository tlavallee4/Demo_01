// interface
export type Item = {
    id: string,
    name: string,
    description: string;
};


const items: Item[] = [];

// async function that consumes nothing and sends back the promise of item 
export const fetchAllItems = async() : Promise<Item[]> => {
    return items;
}

export const createItem = async( item: {
    name: string, description: string
}): Promise<Item> => { 
    // ...item is a spread. spreads out the value to an array
    const newItem: Item = {id: Date.now().toString(), ...item};
        items.push(newItem);
        return newItem;
};

// Iterate through items to add an id to each item 
export const updateItem = async(
    id:string, 
    item: {name: string, description: string}
): Promise<Item> => {
    const index: number = items.findIndex((i) => i.id === id);
    // if match found
    if(index === -1){
        throw new Error(`Item with ID ${id} not found`);
    }
    // 
    items[index] = {id, ...item}
    return items[index]
}