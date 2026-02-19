<script lang="ts">
  import { onMount } from 'svelte';
  import { uiState } from '@/lib/ui.svelte';

  function handleKeydown(e: KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      uiState.openSearch();
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });
</script>

<button
  onclick={() => uiState.openSearch()}
  class="group flex items-center justify-center p-2 rounded-md hover:bg-accent hover:text-primary transition-all duration-200 text-muted-foreground"
  aria-label="Search"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
</button>
