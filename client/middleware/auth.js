import { useNuxtApp } from '#app'

export default function (context) {
    const { redirect, route } = context
    console.log(redirect, route)
    console.log(useNuxtApp())
}
