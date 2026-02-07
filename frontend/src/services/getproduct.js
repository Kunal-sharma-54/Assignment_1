

// lets fetch the response from backend in frontend 
export async function getproducts() {
    const response = await fetch("http://localhost:5000/api/products");

    const data =await response.json();
    return data;
}