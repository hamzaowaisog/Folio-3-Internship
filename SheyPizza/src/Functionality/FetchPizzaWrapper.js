import { fetchSpecificPizza } from "../API/useFetch";

const pizzaCache = new Map();
const pizzaPromiseCache = new Map();


export function fetchPizzaWrapper (id) {
    if(!pizzaCache.has(id)){
        if(!pizzaPromiseCache.has(id)){
            const promise = fetchSpecificPizza(id).then(response => {
                pizzaCache.set(id, response);
                pizzaPromiseCache.delete(id);
            });
            pizzaPromiseCache.set(id, promise);
            throw promise;
        }
        throw pizzaPromiseCache.get(id);
    }
    return pizzaCache.get(id);
}