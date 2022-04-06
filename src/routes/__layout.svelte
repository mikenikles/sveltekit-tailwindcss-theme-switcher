<script context="module">
  /** @type {import('./__layout').Load} */
  export const load = ({session}) => {
    return {
      props: {
        theme: session.theme
      }
    }
  };
</script>

<script>
  import "../app.css";

  export let theme;
</script>

<div class="{theme ? theme : ""}">
  <slot />
</div>
