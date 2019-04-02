import Vue from 'vue';
import HelloWorld from '../components/HelloWorld.vue';
import Component from 'vue-class-component';
@Component({
    components: {
        HelloWorld,
    },
  })

export default class Home extends Vue {
    name: string = 'app';
    msg: string = 'This is page 1';
}
