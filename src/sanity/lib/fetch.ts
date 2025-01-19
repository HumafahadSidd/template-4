// import { createClient } from "next-sanity";

// // Create the Sanity client
// const client = createClient({
//     projectId: "i70f54zm",
//     dataset: "production",
//     useCdn: true,
//     apiVersion: "2023-10-10" // Ensure this is a valid date in YYYY-MM-DD format
// });

// // Define the sanityFetch function
// export async function sanityFetch({ query, params = {} }: { query: string, params?: Record<string, any> }): Promise<any> {
//     return await client.fetch(query, params);
// }
import { createClient } from "next-sanity";

// Create the Sanity client
const client = createClient({
    projectId: "i70f54zm",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-10-10" // Ensure this is a valid date in YYYY-MM-DD format
});

// Define a custom fetch function
interface FetchParams {
    query: string;
    params?: Record<string, unknown>;
}

interface Product {
    _id: string;
    name: string;
    image: {
        asset: {
            _id: string;
            url: string;
        };
    };
    price: string;
    description: string;
    discountPercentage?: number;
    isFeaturedProduct?: boolean;
    stockLevel: number;
    category: string;
}

export async function sanityFetch({ query, params = {} }: FetchParams): Promise<Product[]> {
    return await client.fetch<Product[]>(query, params);
}
