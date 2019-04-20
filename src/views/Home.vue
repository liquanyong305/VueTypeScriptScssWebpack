<template>
<div class="home">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  <Profile msg="Welcome to Your Vue.js + TypeScript App"/>
</div>
</template>

<script lang="ts">
    import HelloWorld from '@/components/HelloWorld';
    import { Component, Vue } from 'vue-property-decorator';
    import Profile from '@/components/Profile.vue';

    @Component({
        components: {
            HelloWorld,
            Profile,
        },
      })
    
    export default class Home extends Vue {
      private name: string = 'app';
      private msg: string = 'This is page 1';
    }
    
</script>