<script lang="ts">
  import { formatDate } from '@/lib/utils/date';
  
interface Props {
    post: {
      id: string;
      body?: string;
      data: {
        title: string;
        description: string;
        pubDate: Date;
        tags: string[];
        featured?: boolean;
        draft?: boolean;
        lang?: string;
      };
    };
    readTime: string;
    slug: string;
  }

  let { post, readTime, slug }: Props = $props();
</script>

<article
  class="group relative -mx-4 px-4 py-4 sm:py-5 border-b border-border/40 hover:border-primary/50 hover:bg-muted/30 transition-all duration-200"
>
  <div class="flex flex-col gap-2">
    <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
      <h2 class="text-lg sm:text-xl font-bold tracking-tight leading-tight">
        <a href={`/posts/${slug}`} class="transition-colors no-underline block">
          <span class="absolute -inset-x-0 -inset-y-0 z-20"></span>
          <span class="relative z-10 text-foreground group-hover:text-primary transition-colors"
            >{post.data.title}</span
          >
        </a>
      </h2>
      <time
        datetime={post.data.pubDate.toISOString()}
        class="flex-shrink-0 text-xs font-mono text-muted-foreground tabular-nums opacity-70"
      >
        {formatDate(post.data.pubDate)}
      </time>
    </div>

    <p class="relative z-10 text-sm leading-relaxed text-muted-foreground line-clamp-2 max-w-prose">
      {post.data.description}
    </p>

    <div
      class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-wider text-muted-foreground/60 mt-1"
    >
      {#if post.data.featured}
        <div class="flex items-center gap-1 text-primary font-bold">
          <span>★</span>
          Featured
        </div>
      {/if}

      <div class="flex items-center gap-1.5 font-mono">
        {readTime}
      </div>

      {#if post.data.tags.length > 0}
        <span class="hidden sm:inline text-border/40">|</span>
        <div class="flex gap-2">
          {#each post.data.tags.slice(0, 3) as tag (tag)}
            <span class="hover:text-foreground transition-colors cursor-pointer">#{tag}</span>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</article>
