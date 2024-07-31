import { STRAPI_URL } from "../config";

export async function getHome() {
    const res = await fetch(`${STRAPI_URL}/api/home?populate=*`)
    if (!res.ok) {
      throw new Error('something went wrong')
    }
  
    const { data } = await res.json()
    return data
  }

  export async function getAboutUs() {
    const res = await fetch(`${STRAPI_URL}/api/about-us?populate=*`)
    if (!res.ok) {
      throw new Error('something went wrong')
    }
  
    const { data } = await res.json()
    return data
  }

  export async function getService() {
    const res = await fetch(`${STRAPI_URL}/api/service?populate=*`)
    if (!res.ok) {
      throw new Error('something went wrong')
    }
  
    const { data } = await res.json()
    return data
  }

  export async function getProject() {
    const res = await fetch(`${STRAPI_URL}/api/project?populate=*`)
    if (!res.ok) {
      throw new Error('something went wrong')
    }
  
    const { data } = await res.json()
    return data
  }