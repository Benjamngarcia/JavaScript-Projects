export async function getAllProductsApi() {
  try {
    const url = `https://fakestoreapi.com/products`
    const response = await fetch(url)
    const result = await response.json()
    return result || null
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function getProductByUrl(path) {
  try {
    const url = `https://fakestoreapi.com/products/${path}`
    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
    return null
  }
}