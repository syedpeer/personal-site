<template>
  <div class="blogpost__article" :style="borderStyle">
    <router-link
      v-if="!blogpost.type"
      class="blogpost__article-link"
      :aria-label="ariaLabel"
      :to="blogpost.url"
    >
      <BlogpostArticleContent :blogpost="blogpost" />
    </router-link>
    <a
      v-else
      class="blogpost__article-link"
      :aria-label="ariaLabel"
      :href="blogpost.url"
      target="_blank"
      rel="noopener noreferrer"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <BlogpostArticleContent :blogpost="blogpost" />
    </a>
  </div>
</template>

<script>
import BlogpostArticleContent from './BlogpostArticleContent';

export default {
  name: 'BlogpostArticle',
  components: {
    BlogpostArticleContent,
  },
  props: {
    blogpost: Object,
  },
  data() {
    return {
      isHovered: false,
    };
  },
  computed: {
    ariaLabel() {
      return `Link to blogpost ${this.blogpost.title}`;
    },
    borderStyle() {
      const opactity = this.isHovered ? 0.5 : 0.3;
      const mediumColor = `rgba(3, 168, 124, ${opactity})`;
      if (this.blogpost.type === 'medium') {
        return `border-color: ${mediumColor}`;
      }
      return '';
    },
  },
};
</script>

<style lang="scss" scoped>
$border-color: #dbdbdb;

.blogpost__article {
  cursor: pointer;
  margin-top: 1em;
  border-radius: 0.25em;
  border: 1px solid $border-color;
}

.blogpost__article-link {
  color: black;
  text-decoration: none;
}
</style>
