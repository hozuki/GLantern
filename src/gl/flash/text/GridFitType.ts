/**
 * Created by MIC on 2015/12/23.
 */

export abstract class GridFitType {

    static get NONE(): string {
        return "none";
    }

    static get PIXEL(): string {
        return "pixel";
    }

    static get SUBPIXEL(): string {
        return "subpixel";
    }

}
