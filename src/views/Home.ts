import HelloWorld from '@/components/HelloWorld';
import { Component, Vue } from 'vue-property-decorator';
import Profile from '@/components/Profile.vue';
import WithRender from './Home.html';

@WithRender
@Component({
    components: {
        HelloWorld,
        Profile,
    },
  })

export default class Home extends Vue {
    public name: string = 'app';
    public msg: string = 'This is page 1';
}
