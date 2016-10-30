/**
 * Created by MIC on 2015/11/20.
 */

import {DisplayObject} from "./DisplayObject";
import {Stage} from "./Stage";
import {DisplayObjectContainer} from "./DisplayObjectContainer";
import {Graphics} from "./Graphics";
import {WebGLRenderer} from "../../webgl/WebGLRenderer";
import {ShaderManager} from "../../webgl/ShaderManager";
import {ShaderID} from "../../webgl/ShaderID";
import {TimeInfo} from "../../mic/TimeInfo";

export class Shape extends DisplayObject {

    constructor(root: Stage, parent: DisplayObjectContainer) {
        super(root, parent);
        this._graphics = new Graphics(this, root.$worldRenderer);
    }

    dispose(): void {
        super.dispose();
        this.graphics.dispose();
        this._graphics = null;
    }

    get graphics(): Graphics {
        return this._graphics;
    }

    protected _$update(timeInfo: TimeInfo): void {
        this.graphics.$update();
    }

    protected _$render(renderer: WebGLRenderer): void {
        this.graphics.$render(renderer);
    }

    protected _$selectShader(shaderManager: ShaderManager): void {
        // Switched to the new Primitive2Shader. Consider PrimitiveShader as obsolete.
        shaderManager.selectShader(ShaderID.PRIMITIVE2);
    }

    private _graphics: Graphics = null;

}
