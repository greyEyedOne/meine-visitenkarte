export default defineNuxtRouteMiddleware(() => {
  if (process.env.MAINTENANCE_MODE === 'true') {
    return navigateTo('/maintenance')
  }
})
