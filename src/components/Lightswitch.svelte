<script>
    import { onMount } from 'svelte';
  
    const themes = [
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", 
      "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", 
      "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", 
      "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim", 
      "nord", "sunset"
    ];
  
    function handleThemeChange(event) {
      const theme = event.target.value;
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
  
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  
    onMount(() => {
      const themeChange = require('theme-change');
      themeChange(false);
  
      // Set the theme from local storage on mount
      const savedTheme = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', savedTheme);
  
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  </script>
  
  <div class="dropdown">
    <div tabindex="0" role="button" class="mr-6">
      Theme
      <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg>
    </div>
    <ul class="dropdown-content z-[10] mt-5 shadow-2xl bg-base-300 right-6 rounded-box w-52 h-96 overflow-y-auto">
      {#each themes as theme}
        <li>
          <input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)} value={theme} data-set-theme={theme} on:change={handleThemeChange}/>
        </li>
      {/each}
    </ul>
  </div>
  