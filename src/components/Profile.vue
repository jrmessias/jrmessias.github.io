<script setup>
</script>

<template>
  <div class="relative flex w-full justify-center overflow-hidden">
    <div class="hero-bg pointer-events-none absolute inset-0 -z-10"></div>
    <div class="w-full items-center justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-3">
        <div class="md:hidden lg:block"></div>
        <div class="flex flex-col justify-center align-middle">
          <div class="hero-avatar mx-auto relative w-40 h-40">
            <div class="avatar-ring absolute inset-0 rounded-full"></div>
            <img class="relative w-40 h-40 rounded-full dark:grayscale aspect-square object-cover"
                 src="https://www.gravatar.com/avatar/9287850feb896e1fc865a2f8ea905255?s=250&amp;d=mm&amp;r=x"
                 alt="Júnior Messias, Israel">
          </div>
        </div>
        <div class="flex flex-col text-start py-4 text-base font-medium text-slate-500 dark:text-slate-400">
          <p class="hero-greeting text-slate-700 dark:text-slate-100 text-3xl pb-3 font-display">Olá, eu sou</p>
          <h1 class="hero-name text-imj-500 text-4xl pb-5 font-display font-bold">Israel Messias Júnior</h1>
          <h2 class="hero-role hero-role-1">Analista de Sistemas - <a href="http://www.iopoint.com.br" target="_blank" class="hover:text-imj-500 transition-colors">iopoint</a></h2>
          <h2 class="hero-role hero-role-2">Professor - <a href="https://www.sc.senac.br" target="_blank" class="hover:text-imj-500 transition-colors">SENAC SMO</a></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-bg {
  background: radial-gradient(ellipse 80% 60% at 50% 0%, oklch(69.6% 0.17 162.48 / 0.08) 0%, transparent 70%);
}

.hero-avatar {
  animation: fadeSlideDown 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.avatar-ring {
  background: conic-gradient(
    from 0deg,
    oklch(69.6% 0.17 162.48),
    oklch(50.8% 0.118 165.612),
    oklch(69.6% 0.17 162.48)
  );
  padding: 3px;
  border-radius: 9999px;
  animation: spin 6s linear infinite;
  opacity: 0.7;
}

.hero-greeting {
  animation: fadeSlideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
}

.hero-name {
  animation: fadeSlideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;
}

.hero-role-1 {
  animation: fadeSlideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.45s both;
}

.hero-role-2 {
  animation: fadeSlideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.6s both;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeSlideDown {
  from {
    opacity: 0;
    transform: translateY(-14px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
</style>
