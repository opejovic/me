<template>
  <div class="antialiased">
    <div class="max-w-5xl mx-auto px-6 md:px-8">
      <div>
        <div class="flex justify-between items-center mt-10">
          <h1
            class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 font-medium md:font-normal leading-none"
          >
            <a href="/">Ognjen Pejović</a>
          </h1>
          <div class="block lg:hidden">
            <button type="button" @click="toggleMenu">
              <svg
                v-if="!open"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6H22V7H2V6ZM2 12H22V13H2V12ZM22 18H2V19H22V18Z"
                  class="fill-current text-gray-900"
                ></path>
              </svg>
              <!---->
              <svg
                v-else
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4L20 20M20 4L4 20" stroke="#1A202C" />
              </svg>
            </button>
          </div>
        </div>
        <div class="lg:block" :class="open ? 'block' : 'hidden'">
          <div
            class="w-full block lg:flex lg:justify-between lg:border-b lg:border-gray-400 mt-10 text-gray-700 font-medium lg:text-lg"
          >
            <div class="lg:flex -mb-px">
              <p
                class="font-mono block pb-6 border-transparent lg:mt-0 lg:mr-8 hover:text-gray-900 text-gray-900 lg:border-gray-900"
              >
                Full-Stack Web Developer
              </p>
            </div>
            <div class="lg:flex">
              <a
                target="_blank"
                href="https://twitter.com/itsogio"
                class="block lg:mt-0 lg:ml-8 flex align-center hover:text-gray-900"
              >
                <div class="lg:hidden">Twitter</div>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1 -mt-px lg:block hidden"
                >
                  <path
                    d="M23.012 1.15663C22.0544 1.83211 20.9942 2.34874 19.872 2.68663C19.2698 1.99414 18.4694 1.50332 17.5791 1.28055C16.6888 1.05779 15.7515 1.11382 14.8941 1.44108C14.0367 1.76834 13.3005 2.35103 12.785 3.11034C12.2696 3.86966 11.9997 4.76896 12.012 5.68663V6.68663C10.2547 6.7322 8.51332 6.34244 6.94306 5.55207C5.37279 4.76171 4.02236 3.59526 3.01205 2.15663C3.01205 2.15663 -0.987953 11.1566 8.01205 15.1566C5.95257 16.5546 3.4992 17.2556 1.01205 17.1566C10.012 22.1566 21.012 17.1566 21.012 5.65663C21.0111 5.37808 20.9843 5.10022 20.932 4.82663C21.9527 3.82012 22.6729 2.54934 23.012 1.15663V1.15663Z"
                    stroke="#4A5568"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                href="https://www.github.com/opejovic"
                class="block mt-6 lg:mt-0 lg:ml-8 flex align-center hover:text-gray-900"
              >
                <div class="lg:hidden">GitHub</div>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1 -mt-px lg:block hidden"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22M9 19C4 20.5 4 16.5 2 16L9 19Z"
                      stroke="#4A5568"
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
          </div>
        </div>
        <svg
          style="position: absolute; right: 0; z-index: -1;"
          width="813"
          height="796"
          viewBox="0 0 813 796"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Slice</title>
          <g fill="none" fill-rule="evenodd">
            <path
              fill="#1267CD"
              d="M627.804.553l8.843 2.18 4.026 6.622h-8.204z"
            ></path>
            <path
              fill="#724BBF"
              d="M676.79 48.236l-3.152 5.838 1.575 4.517 3.14-4.517z"
            ></path>
            <path
              fill="#F46A23"
              d="M709.368 45.984l-3.85 8.293h1.925l3.643-8.293zM757.385 24.771l-7.501 8.942 9.94 8.159 7.205-9.24z"
            ></path>
            <path
              fill="#6F47BE"
              d="M809 436.61l-8.429 9.327 6.854 4.918 5.152-4.918z"
            ></path>
            <path
              fill="#FFDF5D"
              d="M725.412 419.269l2.465 8.654h1.904v-5.965z"
            ></path>
            <path
              fill="#30A64A"
              d="M700.076 465.1l2.077 6.776h4.875v-6.09z"
            ></path>
            <path
              fill="#FFDF5D"
              d="M773.446 520.775h4.39l5.21 4.243-2.644.82z"
            ></path>
            <path
              fill="#764FC1"
              d="M680.14 535.033l-2.04 2.799 3.731 2.1.676-2.1z"
            ></path>
            <path
              d="M576.97 561.575c.282.128 2.875 1.612 7.781 4.45h2.054l-7.29-5.242c-1.979.4-2.827.663-2.545.792z"
              fill="#1269D3"
            ></path>
            <path
              fill="#FFDF5D"
              d="M443.837 641.092l-2.322 6.38 3.3 2.104 2.249-5.841z"
            ></path>
            <path
              fill="#30A64A"
              d="M306.447 642.347l-1.747 4.312 4.74 2.39 1.44-6.702z"
            ></path>
            <path
              fill="#E954AC"
              d="M316.519 593.375l1.564 5.522 6.398.722-1.494-4.985zM267.252 603.692v2.496h2.644l6.312-3.894-.7-2.675z"
            ></path>
            <path
              d="M304.738 562.725c.255-.161 1.862-1.593 4.82-4.293l3.939 3.458-3.938 4.034c-3.47-1.971-5.076-3.037-4.82-3.199z"
              fill="#F46A23"
            ></path>
            <path
              fill="#1269D3"
              d="M318.983 430.41l7.104 4.001 1.241-1.28-7.655-3.882z"
            ></path>
            <path
              fill="#E954AC"
              d="M308.934 224.54l.845 4.777 8.254-.996v-5.196z"
            ></path>
            <path
              fill="#1267CD"
              d="M198.35 95.72l9.09 4.95 1.524-1.174-8.724-6.162z"
            ></path>
            <path
              fill="#FCCF77"
              d="M218.731 156.014v8.681h5.027l-.996-10.1z"
            ></path>
            <path
              fill="#E954AC"
              d="M205.627 279.492l5.448 5.28 9.292-3.892-3.374-6.916z"
            ></path>
            <path
              fill="#FFDF5D"
              d="M.187 601.815l5.885 2.403 5.497-4.52-6.652-1.552z"
            ></path>
            <path
              fill="#30A64A"
              d="M20.276 571.663l.882 7.341 9.185-2.658-1.263-6.185z"
            ></path>
            <path
              fill="#F46A23"
              d="M109.315 584.363l6.238-6.944 8.133 6.944-6.102 7.512zM160.134 569.71l-2.97 7.033h2.181l2.176-7.033z"
            ></path>
            <path
              fill="#764FC1"
              d="M184.631 570.813v4.337l3.605-2.168-1.124-3.272z"
            ></path>
            <path
              fill="#1269D3"
              d="M212.641 608.432h6.549l4.598 10.506-8.282-3.134z"
            ></path>
            <path
              fill="#FFDF5D"
              d="M271.73 675.45v5.58l2.071 2.557v-6.617z"
            ></path>
            <path
              fill="#E954AC"
              d="M77.648 728.079l-1 3.065 4.277 3.625.869-2.407z"
            ></path>
            <path
              fill="#1269D3"
              d="M347.756 720.092l-1.583 3.71 7.56 2.106 1.945-2.908zM357.49 746.143v1.988l4.5-.357.594-1.63z"
            ></path>
            <path
              fill="#E954AC"
              d="M396.463 731.626l2.26 5.704 8.743-.532-.67-6.211zM490.873 721.41l-1.28 3.128 6.984 1.726 2.125-3.985zM526.704 717.021l7.424-4.42 2.8 3.258-7.23 4.816z"
            ></path>
            <path
              fill="#6A737D"
              d="M525.05 784.871l5.33 6.838 8.977-6.838-5.725-6.232zM592.472 716.638l2.948 6.629 8.51-3.892-4.048-6.773z"
            ></path>
            <path
              fill="#F46A23"
              d="M699.37 675.225l3.101 4.605 5.792-3.406-3.746-4.482z"
            ></path>
            <path
              d="M700.36 637.593v5.738c4.448 1.326 6.606 1.83 6.476 1.515-.13-.315-.355-1.853-.675-4.614l-5.8-2.639zM745.748 649.234l.784 2.442 8.49-1.221v-2.828z"
              fill="#E954AC"
            ></path>
            <path
              fill="#1269D3"
              d="M799.868 650.305l1.07 9.586 6.584 3.223-.538-8.048zM648.18 790.646l5.868 5.242 1.535-.762-6.036-5.47z"
            ></path>
          </g>
        </svg>
      </div>
      <div
        class="text-xl sm:text-2xl md:text-3xl lg:text-4xl md:font-light text-gray-700 bg-white"
      >
        <div class="mt-10">
          <p class="hello-particle-1 inline-block">&#128075;</p>
          Hi! I'm Ognjen Pejović, a web developer from Montenegro. I can help
          you build bespoke high-quality projects from scratch using
          <a
            href="https://laravel.com/"
            target="_blank"
            class="highlight text-gray-900"
            >Laravel (PHP)</a
          >,
          <a
            href="https://vuejs.org/"
            target="_blank"
            class="highlight text-gray-900"
            >Vue JS</a
          >
          and
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            class="highlight text-gray-900"
            >Tailwind CSS</a
          >.
        </div>
        <p class="mt-6">
          Over the past 3 years I worked mostly on web applications built in PHP
          using Laravel Framework, where I've handled entire application
          architecture and design for couple of projects and worked on existing
          code bases to implement new features.
        </p>

        <p class="mt-6">
          I strive to write clean, maintainable code through test driven
          development.
        </p>
        <div class="mt-6">
          Feel free to
          <a
            href="mailto:ognjen@fullstacked.dev"
            class="highlight text-gray-900"
            >contact me</a
          >!
        </div>
      </div>
      <p
        class="border-gray-400 border-t pt-6 mt-6 sm:mt-8 md:mt-10 mb-20 text-gray-700 text-sm sm:text-base lg:text-lg"
      >
        This website was HEAVILY inspired by
        <a
          href="https://steveschoger.com/"
          class="border-b border-gray-900 pb-px text-gray-900"
          >Steve Schoger</a
        >. It was built with
        <a
          href="https://tailwindcss.com/"
          class="border-b border-gray-900 pb-px text-gray-900"
          >TailwindCSS</a
        >
        and
        <a
          href="https://nuxtjs.org/"
          class="border-b border-gray-900 pb-px text-gray-900"
          >Nuxt.js</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      title: 'Ognjen Pejović'
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
  },
  methods: {
    toggleMenu() {
      this.open = !this.open
    }
  }
}
</script>

<style lang="css">
.highlight {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 70%,
    #0ac37c60 70%
  );
}

@keyframes hello-particle {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-16px);
  }
  100% {
    transform: translateY(0);
  }
}
.hello-particle-1 {
  animation: hello-particle 1s ease-in-out 1s normal;
  animation-iteration-count: 3;
}
</style>
