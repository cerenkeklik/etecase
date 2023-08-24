import { baseURL } from '../baseURL'

export async function getallCompanies() {
  try {
    const val = await fetch(`${baseURL}/company/`, {
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

export async function updateCompany(id: string, bodyObject: any) {
    try {
      const val = await fetch(`${baseURL}/company/${id}`, {
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

  
  export async function addCompany(bodyObject: any) {
    try {
      const val = await fetch(`${baseURL}/company/`, {
        method: 'POST',
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

  export async function deleteCompany(id: string) {
    try {
      const val = await fetch(`${baseURL}/company/${id}`, {
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