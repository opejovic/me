<template>
  <div
    class="antialiased bg-gray-900 cover-lines min-h-screen"
    :class="open ? 'fixed' : ''"
  >
    <div class="lg:flex px-6 lg:px-0">
      <!-- menu on lg -->
      <div
        class="hidden min-h-screen px-6 lg:flex flex-col items-center justify-center"
      >
        <div class="mb-auto"></div>
        <menu-lg></menu-lg>
      </div>
      <!-- end menu on lg -->

      <!-- Menu on sm -->
      <div class="block lg:hidden pb-20">
        <button class="pt-10 relative focus:outline-none" @click="toggleMenu">
          <svg
            class="text-white w-10"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="currentColor"
              fill-rule="evenodd"
            >
              <g v-show="!open" id="icon-shape">
                <path
                  d="M0,3 L20,3 L20,5 L0,5 L0,3 Z M0,9 L20,9 L20,11 L0,11 L0,9 Z M0,15 L20,15 L20,17 L0,17 L0,15 Z"
                  id="Combined-Shape"
                ></path>
              </g>
              <g v-show="open" id="icon-shape">
                <polygon
                  id="Combined-Shape"
                  points="10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644"
                ></polygon>
              </g>
            </g>
          </svg>
        </button>
        <div
          v-if="open"
          class="absolute bg-gray-900 w-full -ml-6 mt-8 text-white"
          style="z-index: 100 !important;"
        >
          <menu-sm />
        </div>
      </div>
      <!-- end menu on -->

      <div
        class="my-auto leading-none flex items-center justify-start md:justify-center space-x-10 w-full relative"
      >
        <div>
          <div
            class="text-6xl md:text-7xl tracking-tighter font-alliance-medium  text-white"
          >
            <h1 class="gradient-text">
              <p>Hi.</p>
              <p>I'm Ognjen,</p>
              <p>a web developer.</p>
            </h1>
          </div>

          <svg
            class="absolute right-0 bottom-0 -mb-32 mr-8 md:mr-12 w-32"
            width="175"
            height="64"
            viewBox="0 0 175 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M70.1736 30.8129C70.4415 30.711 83.9118 25.9264 81.6813 25.9264C80.8581 24.7143 78.1313 24.4079 75.821 25.0239C74.0924 25.4848 68.7818 26.8398 68.2986 28.9823C67.2373 33.6881 86.288 28.4748 87.9232 27.9596C91.9462 26.6921 96.0038 25.4377 99.8695 23.7549C101.558 23.0199 98.0102 24.6973 97.8817 24.7777C97.2464 25.1753 94.912 26.2975 94.8025 27.202C94.706 27.9998 100.636 25.7022 100.766 25.6489C103.278 24.6187 105.737 23.4441 108.288 22.5049C109.276 22.1413 107.997 22.6799 107.762 22.8837C107.669 22.9651 106.913 23.6644 107.294 23.8496C107.806 24.098 109.471 23.3031 108.99 23.6034C107.475 24.5497 106.177 25.7389 104.742 26.7853"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M125.794 4.11014C116.251 17.2763 104.768 29.2346 92.6588 39.7685C84.0884 47.2238 75.3893 54.6078 66.1872 61.2063C65.3139 61.8325 62.7802 63.4931 63.2641 62.5087C63.9392 61.1356 64.9658 59.9348 65.8193 58.6867"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M104.572 6.68771C116.291 6.00493 127.967 5.27816 139.702 5.90341C141.037 5.9745 150.357 5.66115 152.124 8.39891C155.805 14.1011 137.791 23.7801 135.643 24.691C127.411 28.1823 116.985 30.8125 108.174 29.3611C106.82 29.1381 105.196 28.8424 104.267 27.5073C104.077 27.2335 104.023 26.5202 104.023 27.2221"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M110.658 28.8829C113.987 29.9325 117.526 30.3272 121.03 29.9771C121.619 29.9182 128.253 29.3516 127.512 27.4604C126.563 25.0381 108.376 32.0132 109.833 34.7186C110.412 35.7936 115.243 34.8924 116.119 34.8645C119.314 34.7629 120.514 35.754 120.696 38.6942C120.993 43.5014 117.876 49.1503 112.544 50.5116C109.488 51.2916 104.833 50.3323 106.218 46.4266C108.194 40.8558 114.957 36.4585 119.989 33.5332C127.178 29.3534 135.203 26.8516 143.581 25.6732C147.062 25.1835 144.612 27.3527 143.385 28.6275C142.383 29.6683 140.644 31.8647 142.952 29.7217C144.145 28.6145 147.673 25.7648 147.117 23.9225C146.642 22.3484 138.81 26.2283 138.491 26.5648C136.352 28.8247 139.616 28.4021 140.731 27.3673"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M149.397 22.214C143.021 38.9729 155.409 20.0058 154.424 25.2427C154.098 26.9785 153.24 28.4919 152.493 30.0814C152.08 30.9614 150.624 33.3084 151.472 32.81C152.088 32.4482 152.498 30.4672 152.716 29.9723C154.004 27.052 155.594 24.3137 157.283 21.6046"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M156.894 18.4944C157.413 18.4944 157.931 18.4944 158.449 18.4944"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M79.1415 18.4944C79.6598 18.4944 80.1782 18.4944 80.6965 18.4944"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M166.613 23.3132C163.619 19.8649 153.554 26.9152 158.019 29.4819C163.075 30.0327 163.451 29.9594 165.252 27.7194"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M174 15.7731C170.402 16.9693 167.441 17.8755 163.892 19.6607"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M34.0339 1C21.164 8.91373 7.86071 19.0799 2.43099 32.7788C0.288887 38.1832 -0.395281 44.0237 7.29738 44.1506C15.1342 44.2798 23.2586 38.7125 28.137 33.7134C34.8065 26.879 39.6158 19.5007 39.8736 10.2428C40.1366 0.797823 21.7586 6.16813 16.7439 7.23113C14.3963 7.72878 7.64685 8.43279 6.32411 10.9179C5.62781 12.2261 9.10289 13.6373 9.81646 14.0854"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M53.8808 22.6707C42.597 24.7467 30.4155 28.6806 21.6165 35.662C20.4047 36.6234 17.097 38.0871 18.4072 38.9357C19.7461 39.8029 24.1035 38.6141 25.3128 38.2862C31.9311 36.4914 38.4608 33.9989 44.8261 31.5827C49.9234 29.6479 55.476 27.5527 59.9554 24.5414C62.3403 22.9381 60.8192 21.9838 58.4081 21.8393C51.6826 21.4361 43.4049 22.7334 38.8088 27.5814C34.3064 32.3306 38.9446 33.6192 40.0982 38.2862C42.0154 46.0424 37.0688 55.1101 29.9261 59.28C27.6832 60.5895 25.3107 61.7798 22.5907 61.0209C21.154 60.62 22.3356 58.2703 22.5907 57.5132C24.2779 52.5064 28.3115 48.4198 31.9892 44.522C39.9549 36.0794 49.0867 29.2247 59.4396 23.2943C64.0869 20.6322 68.7569 18.7476 73.9098 17.1364C74.6249 16.9128 74.7096 16.6068 74.0531 17.4742C71.6771 20.6136 69.5231 23.9473 67.0902 27.0358C65.9031 28.5427 70.2867 24.7274 71.8181 23.5021C76.2331 19.9698 80.5132 16.311 84.9989 12.8493C85.959 12.1083 85.98 12.1224 85.1708 12.6674C84.0151 13.4459 82.6764 14.3324 81.5604 15.1098C75.7831 19.1346 70.7886 23.9017 65.7435 28.6467C63.524 30.7341 56.7707 36.8757 59.2677 35.0644C62.0781 33.0256 64.3289 30.2046 66.8896 27.9192C70.6968 24.5213 67.2593 28.8563 66.4598 30.1017C64.2346 33.5682 62.3947 37.2268 60.1846 40.7026C59.5823 41.6498 57.8313 44.4461 58.0929 43.3788C58.345 42.3499 59.4406 41.2988 60.07 40.4427"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div
            class="text-xl md:flex md:space-x-6 space-y-3 md:space-y-0 md:text-3xl mt-5 font-roboto-mono tracking-wider text-gray-300"
          >
            <div>Laravel</div>
            <span class="hidden md:block">&middot;</span>
            <div>Vue.js</div>
            <div class="hidden md:block">&middot;</div>
            <div>TailwindCSS</div>
          </div>
          <a
            href="mailto:ognjen@fullstacked.dev"
            class="inline-block mt-8 border text-sm font-bold py-4 px-4 font-roboto-mono tracking-normal relative text-teal-300"
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
import MenuLg from '../components/MenuLg.vue'
import MenuSm from '../components/MenuSm.vue'

/* npm run generate && gaa && gc -m 'commit' && npm run deploy */
export default {
  components: {
    MenuLg,
    MenuSm
  },

  data() {
    return {
      open: false,
      title: 'Ognjen',
      isLight: false
    }
  },

  computed: {
    menuLg() {
      return 'hidden lg:block'
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
      return (this.open = !this.open)
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
  background-position: 58% 50%;
  background-size: 500%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-animation: gradient-shift 30s ease infinite;
  animation: gradient-shift 30s ease infinite;
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

.cover-lines {
  position: relative;
  z-index: 0;
}

.cover-lines::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url('../assets/images/bg.svg') center/cover no-repeat;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
}
</style>
