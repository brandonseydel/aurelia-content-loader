import { bindable, customElement, IViewModel } from "aurelia";
import template from "../content-loader/content-loader.html";
import { ContentLoaderType, uid } from '../helpers';


@customElement({ name: 'content-loader', template })
export class ContentLoader implements IViewModel {
    @bindable() type: ContentLoaderType = 'list';

    @bindable() primaryColor = '#f9f9f9';

    @bindable() animate = true;

    @bindable() baseUrl = '';

    @bindable() width = 400;

    @bindable() height = 130;

    @bindable() speed = 2;

    @bindable() preserveAspectRatio = 'xMidYMid meet';

    @bindable() secondaryColor = '#ecebeb';

    @bindable() primaryOpacity = 1;

    @bindable() secondaryOpacity = 1;

    @bindable() uniqueKey;

    @bindable() rtl;

    @bindable() style;

    @bindable() ignoreBaseUrl = false;


    idClip = uid();
    idGradient = uid();

    defautlAnimation = ['-3; 1', '-2; 2', '-1; 3'];
    rtlAnimation = ['1; -3', '2; -2', '3; -1'];
    animationValues;


    constructor() {
        this.baseUrl = window.location.pathname;
        this.animationValues = this.rtl ? this.rtlAnimation : this.defautlAnimation;
    }

    public get fillStyle(): unknown {
        return {
            fill: `url(#${this.idGradient})`
        };
    }

    public get clipStyle(): string {
        return `url(#${this.idClip})`;
    }
}