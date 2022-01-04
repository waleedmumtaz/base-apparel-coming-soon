<script>
  import { fade } from 'svelte/transition'

  let emailIsValid = true

  const validEmailCheck = (e) => {
    const email = e.target.email.value
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    emailIsValid = re.test(email) ? true : false
  }
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
    <div class="md:flex">
      <div
        class="md:flex-1 md:bg-pattern-desktop md:bg-cover md:flex md:flex-col md:justify-center"
      >
        <div class="md:max-w-4xl md:mx-auto">
          <div class="p-10 md:px-5">
            <img src="/assets/logo.svg" alt="logo" />
          </div>
          <img
            src="/assets/hero-mobile.jpg"
            alt="hero"
            class="w-full md:hidden"
          />
          <div class="max-w-sm md:max-w-none mx-auto px-5">
            <h1
              class="uppercase text-5xl md:text-8xl text-center md:text-left pt-20 pb-6 tracking-widest"
            >
              <span class="text-cstm-primary-desaturated-red font-light"
                >We're<br /></span
              >coming<br /> soon
            </h1>
            <p
              class="text-cstm-primary-desaturated-red text-center md:text-left md:max-w-xl"
            >
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
          </div>
          <div class="max-w-sm md:max-w-none mx-auto px-5 my-10">
            <form
              on:submit|preventDefault={validEmailCheck}
              class="flex items-center mb-2 max-w-sm md:max-w-xl mx-auto md:mx-0 border-2 border-cstm-primary-desaturated-red rounded-full"
            >
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                class="w-full rounded-full p-4 placeholder:text-cstm-primary-desaturated-red focus:outline-none"
              />
              {#if !emailIsValid}
                <img
                  transition:fade
                  src="/assets/icon-error.svg"
                  alt="error icon"
                  class="pr-4"
                />
              {/if}
              <button
                type="submit"
                value="Submit"
                class="bg-pink-to-orangish hover:scale-110 hover:brightness-125 transition-all duration-200 pl-11 pr-9 py-4 rounded-full"
              >
                <img
                  src="/assets/icon-arrow.svg"
                  alt="right arrow"
                  width="24"
                />
              </button>
            </form>
            {#if !emailIsValid}
              <p transition:fade class="text-red-500 ml-6">
                Please provide a valid email
              </p>
            {/if}
          </div>
        </div>
      </div>
      <div class="md:h-screen">
        <img
          src="/assets/hero-desktop.jpg"
          alt="hero"
          class="hidden md:block md:h-full"
        />
      </div>
    </div>
  </div>
</main>

<footer class="flex justify-center py-5 font-josefin-sans">
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
