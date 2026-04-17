import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(selector = '.reveal', options = {}) {
  const config = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
    ...options,
  }

  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        }
      })
    }, config)

    document.querySelectorAll(selector).forEach((el) => {
      observer.observe(el)
    })
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
