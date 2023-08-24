import { baseURL } from '../baseURL'

export async function getallProducts() {
  try {
    const val = await fetch(`${baseURL}/product/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    })
    return val.json()
  } catch (error) {
    return error
  }
}


export async function updateProduct(id: string, bodyObject: any) {
    try {
      const val = await fetch(`${baseURL}/product/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(bodyObject)
      })
      return val.json()
    } catch (error) {
      return error
    }
  }

  
export async function addProduct(bodyObject: any) {
    console.log(bodyObject)
    try {
      const val = await fetch(`${baseURL}/product/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(bodyObject)
      })
      return val.json()
    } catch (error) {
        console.log(error)
      return error
    }
  }

  export async function deleteProduct(id: string) {
    try {
      console.log(id)
      const val = await fetch(`${baseURL}/product/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }
      })
      return val.json()
    } catch (error) {
        console.log(error)
      return error
    }
  }