import { STRAPI_URL } from "../config/config";

export async function getData(url) {
  const res = await fetch(`${STRAPI_URL}${url}`)
  if (!res.ok) {
    throw new Error('something went wrong')
  }

  const { data } = await res.json()
  return data
}