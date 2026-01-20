<script setup lang="ts">
import { computed } from 'vue'

type AnalyticsConsent = 'accepted' | 'rejected' | null

const analyticsConsent = useCookie<AnalyticsConsent>('analytics_consent', {
  default: () => null,
  sameSite: 'lax',
})

const locale = useCookie('locale', { default: () => 'en' })

const isGerman = computed(() => locale.value === 'de')

function onAcceptAnalytics() {
  analyticsConsent.value = 'accepted'
  console.log('analytics accepted')
}

function onRejectAnalytics() {
  analyticsConsent.value = 'rejected'
  console.log('analytics rejected')
}

// function switchToGerman() {
//   // later: save preference
//   locale.value = 'de'
// }

// function switchToEnglish() {
//   // later: save preference
//   locale.value = 'en'
// }

watchEffect(() => {
  console.log('analytics consent:', analyticsConsent.value)
})
</script>

<template>
  <div class="bg-[url('/img/bg-template.png')] dark:bg-[url('/img/bg-dark-template.png')]">
    <div
      class="backdrop-blur-sm flex flex-col min-h-screen h-full mx-auto justify-center items-center"
    >
      <Header />
      <div class="container flex w-full max-w-95/100 h-full mx-6">
        <NuxtPage />
      </div>
      <Footer />
    </div>
    <CookieBanner
      v-if="analyticsConsent === null"
      :text="
        isGerman
          ? 'Diese Website verwendet Cookies, die für den technischen Betrieb erforderlich sind. Mit Ihrer Einwilligung können anonymisierte Nutzungsdaten erhoben werden, um die Nutzung der Website zu analysieren und deren Leistung zu verbessern.'
          : 'This website uses cookies that are necessary for its technical operation. With your consent, anonymized usage data may be collected to understand how the website is used and to improve its performance.'
      "
      :accept-label="isGerman ? 'Analyse erlauben' : 'Accept analytics'"
      :reject-label="isGerman ? 'Ohne Analyse fortfahren' : 'Continue without analytics'"
      :policy-link="isGerman ? '/datenschutzerklaerung' : '/en/privacy-policy'"
      :policy-label="isGerman ? 'Datenschutzerklärung' : 'Privacy Policy'"
      @accept="onAcceptAnalytics"
      @reject="onRejectAnalytics"
    />
  </div>
</template>
