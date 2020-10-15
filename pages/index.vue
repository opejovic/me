<template>
  <div class="antialiased" :class="isLight ? 'bg-gray-100' : 'bg-gray-900'">
    <div class="flex">
      <div
        class="min-h-screen px-6 flex flex-col items-center justify-center"
        :class="isLight ? 'bg-gray-200' : ''"
      >
        <div class="mb-auto mt-4">
          <button class="hello-particle-1" @click="toggleTheme">
            <svg
              class="w-6"
              :class="isLight ? 'text-gray-700' : 'text-white'"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M11 11.9A5.002 5.002 0 0010 2a5 5 0 00-1 9.9V14h2v-2.1zm2 1.426a7 7 0 10-6 0V16h6v-2.674zM7 17h6v1.5c0 .828-.665 1.5-1.499 1.5H8.5A1.496 1.496 0 017 18.5V17z"
                fill="currentColor"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div class="mb-auto -mt-4">
          <div>
            <a
              target="_blank"
              href="https://www.github.com/opejovic"
              class="mt-6 flex align-center hover:text-gray-900"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22M9 19C4 20.5 4 16.5 2 16L9 19Z"
                    :stroke="isLight ? '#4A5568' : '#FFFFFF'"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://twitter.com/opejovic"
              class="mt-6 flex align-center hover:text-gray-900"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.012 1.15663C22.0544 1.83211 20.9942 2.34874 19.872 2.68663C19.2698 1.99414 18.4694 1.50332 17.5791 1.28055C16.6888 1.05779 15.7515 1.11382 14.8941 1.44108C14.0367 1.76834 13.3005 2.35103 12.785 3.11034C12.2696 3.86966 11.9997 4.76896 12.012 5.68663V6.68663C10.2547 6.7322 8.51332 6.34244 6.94306 5.55207C5.37279 4.76171 4.02236 3.59526 3.01205 2.15663C3.01205 2.15663 -0.987953 11.1566 8.01205 15.1566C5.95257 16.5546 3.4992 17.2556 1.01205 17.1566C10.012 22.1566 21.012 17.1566 21.012 5.65663C21.0111 5.37808 20.9843 5.10022 20.932 4.82663C21.9527 3.82012 22.6729 2.54934 23.012 1.15663V1.15663Z"
                  :stroke="isLight ? '#4A5568' : '#FFFFFF'"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ognjen-pejovic-831a191b/"
              class="mt-6 flex align-center hover:text-gray-900"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1715 8.17146C17.7628 8.17146 19.2889 8.8036 20.4141 9.92882C21.5393 11.054 22.1715 12.5802 22.1715 14.1715V21.1715H18.1715V14.1715C18.1715 13.641 17.9607 13.1323 17.5857 12.7572C17.2106 12.3822 16.7019 12.1715 16.1715 12.1715C15.641 12.1715 15.1323 12.3822 14.7572 12.7572C14.3822 13.1323 14.1715 13.641 14.1715 14.1715V21.1715H10.1715V14.1715C10.1715 12.5802 10.8036 11.054 11.9288 9.92882C13.054 8.8036 14.5802 8.17146 16.1715 8.17146V8.17146Z"
                  :stroke="isLight ? '#4A5568' : '#FFFFFF'"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.17146 9.17146H2.17146V21.1715H6.17146V9.17146Z"
                  :stroke="isLight ? '#4A5568' : '#FFFFFF'"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.17146 6.17146C5.27603 6.17146 6.17146 5.27603 6.17146 4.17146C6.17146 3.06689 5.27603 2.17146 4.17146 2.17146C3.06689 2.17146 2.17146 3.06689 2.17146 4.17146C2.17146 5.27603 3.06689 6.17146 4.17146 6.17146Z"
                  :stroke="isLight ? '#4A5568' : '#FFFFFF'"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div
        class="ml-6 text-white font-bold my-auto leading-none flex items-center justify-center w-screen"
      >
        <div>
          <div
            class="text-3xl tracking-tight md:text-4xl lg:text-7xl font-extrabold  lg:tracking-tighter gradient-text"
          >
            <p>Hi,</p>
            <p>I'm Ognjen,</p>
            <p>a web developer.</p>
          </div>
          <div
            class="text-xl md:text-4xl tracking-widest mt-5"
            style="font-family: 'La Belle Aurore',cursive;"
          >
            <span class="text-red-400">Laravel</span>
            <span :class="isLight ? 'text-gray-900' : 'text-white'"
              >&middot;</span
            >
            <span style="color: #41b883;">VueJS</span>
            <span :class="isLight ? 'text-gray-900' : 'text-white'"
              >&middot;</span
            >
            <span style="color: #16bdca;">TailwindCSS</span>
          </div>
          <a
            href="mailto:ognjen@fullstacked.dev"
            class="inline-block mt-8 border rounded text-sm font-bold py-4 px-4 font-mono tracking-normal"
            :class="
              isLight
                ? 'border-teal-500 text-teal-500'
                : 'border-teal-300 text-teal-300'
            "
            >Say hello</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* npm run generate && gaa && gc -m 'Ok' && git push origin */
export default {
  data() {
    return {
      open: false,
      title: 'Ognjen',
      isLight: false
    }
  },

  watch: {
    isLight(newValue) {
      // eslint-disable-next-line no-console
      sessionStorage.setItem('isLight', JSON.stringify(newValue))
    }
  },

  mounted() {
    if (sessionStorage.isLight) {
      this.isLight = JSON.parse(sessionStorage.getItem('isLight'))
    }
  },

  methods: {
    toggleMenu() {
      this.open = !this.open
    },

    toggleTheme() {
      return (this.isLight = !this.isLight)
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'OGNJENFLSTCKDEVLPR',
          name: 'Full-Stack Web Developer',
          content: 'Full-Stack Web Developer'
        }
      ]
    }
  }
}
</script>

<style lang="css">
@keyframes hello-particle {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(16px);
  }
  100% {
    transform: translateY(0);
  }
}
.hello-particle-1 {
  animation: hello-particle 1s ease-in-out 1s normal;
  animation-iteration-count: 3;
}

.gradient-text {
  background: linear-gradient(
    264.51deg,
    #ffe580 4.38%,
    #ff7571 11.51%,
    #ff7270 25.06%,
    #ea5dad 36.04%,
    #c2a0fd 47.63%,
    #9867f0 59.03%,
    #3bf0e4 69.96%,
    #33ce43 83.74%,
    #b2f4b6 95.62%
  );
  background-position-x: 0%;
  background-position-y: 0%;
  background-size: auto;
  background-clip: border-box;
  background-position: 58% 50%;
  background-position-x: 58%;
  background-position-y: 50%;
  background-size: 500%;
  -webkit-background-clip: text;
  background-clip: text;
  background-clip: text;
  -webkit-animation: gradient-shift 30s ease infinite;
  animation-name: gradient-shift;
  animation-duration: 30s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation: gradient-shift 30s ease infinite;
  animation-name: gradient-shift;
  animation-duration: 30s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  -webkit-text-fill-color: transparent;
}

@keyframes gradient-shift {
  0% {
    background-position: 58% 50%;
  }
  25% {
    background-position: 100% 0%;
  }
  75% {
    background-position: 10% 50%;
  }
  to {
    background-position: 58% 50%;
  }
}
</style>
