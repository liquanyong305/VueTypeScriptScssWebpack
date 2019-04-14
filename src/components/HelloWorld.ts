import { Component, Vue } from 'vue-property-decorator';
import WithRender from './HelloWorld.html';

@WithRender
@Component
export default class HelloWorld extends Vue {
   public name: string = 'app';
   public title: string =  'HOME COMPONENT';
}
