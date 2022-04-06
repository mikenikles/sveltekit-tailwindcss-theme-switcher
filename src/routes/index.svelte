<script>
  import { onMount } from "svelte";

  const applyTheme = () => {
    if (document.cookie.match("theme=dark") || (!(document.cookie.match("theme=")) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  };

  const setTheme = (theme) => {
    if (theme) {
      document.cookie = `theme=${theme}`;
    } else {
      document.cookie = `theme=${theme}; max-age=0`;
    }
    applyTheme();
  };

  onMount(() => {
    applyTheme();
  });
</script>

<div class="h-100 w-100 bg-white dark:bg-black">
  <h1 class="text-black dark:text-white">Testing a dark mode toggle</h1>
</div>

<div class="flex flex-col">

  <button on:click="{() => setTheme("light")}">Light</button>
  <button on:click="{() => setTheme("dark")}">Dark</button>
  <button on:click="{() => setTheme()}">System</button>
</div>
