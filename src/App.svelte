<script>
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main class="font-josefin-sans">
  <div class="min-h-screen">
    <div class="p-10">
      <img src="/assets/logo.svg" alt="logo" />
    </div>
    <img src="/assets/hero-mobile.jpg" alt="hero" class="w-full" />
    <div class="max-w-sm mx-auto">
      <h1 class="uppercase text-5xl text-center pt-20 pb-6 tracking-widest">
        <span class="text-cstm-primary-desaturated-red font-light"
          >We're<br /></span
        >coming<br /> soon
      </h1>
      <p class="text-cstm-primary-desaturated-red text-center">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
    </div>
    <div>
      Email Address
      <input type="email" />
      <img
        src="/assets/icon-arrow.svg"
        alt="right arrow"
        class="bg-pink-to-orangish px-8 py-5 rounded-full"
      />
    </div>
  </div>
</main>

<footer class="flex justify-center pb-5 font-josefin-sans">
  <div class="text-center">
    <p>
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="underline">Frontend Mentor</a
      >.
    </p>
    <p>
      Coded by
      <a
        href="https://github.com/waleedmumtaz"
        target="_blank"
        class="font-bold underline">Waleed Mumtaz</a
      >.
    </p>
  </div>
</footer>
