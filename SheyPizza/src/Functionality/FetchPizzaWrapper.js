import { fetchSpecificPizza } from "../API/useFetch";



export async function fetchPizzaWrapper (id) {

    const promise = await fetchSpecificPizza(id);

    return promise;
}