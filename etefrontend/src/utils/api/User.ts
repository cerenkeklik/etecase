import { baseURL } from '../baseURL'

export async function login(username: string, password: string) {
  try {
    const val = await fetch(`${baseURL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    return val.json()
  } catch (error) {
    return error
  }
}

export async function register(username: string, password: string) {
  try {
    const val = await fetch(`${baseURL}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    return val.json()
  } catch (error) {
    return error
  }
}

export async function current(token: string) {
  try {
    const val = await fetch(`${baseURL}/user/register`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    return val.json()
  } catch (error) {
    return error
  }
}
