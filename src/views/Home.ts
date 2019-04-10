import Vue from 'vue';
import HelloWorld from '../components/HelloWorld.vue';
import Component from 'vue-class-component';
import Profile from '@/components/Profile.vue'; 
@Component({
    components: {
        HelloWorld,
        Profile,
    },
  })

export default class Home extends Vue {
    name: string = 'app';
    msg: string = 'This is page 1';
}
