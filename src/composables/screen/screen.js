import { onMounted, onUnmounted, ref } from "vue";

function useScreenResize() {
  const browserWidth = ref(window.innerWidth);
  const deviceWidth = ref(screen.width);
  const isMobile = ref(false);

  const onBrowserResize = () => {
    browserWidth.value = window.innerWidth;
    deviceWidth.value = screen.width;
    isMobile.value = window.innerWidth < 768;
  };

  onMounted(() => {
    onBrowserResize();
    window.addEventListener("resize", onBrowserResize);
  });

  onUnmounted(() => {
    window.addEventListener("resize", onBrowserResize);
  });

  return { browserWidth, deviceWidth, isMobile };
}

export default useScreenResize;
