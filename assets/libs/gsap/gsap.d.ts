declare namespace gsap {

    type RegisterablePlugins =
        | Ease
        | EasePack
        | ExpoScaleEase
        | Plugin
        | RoughEase
        | SteppedEase
        | typeof core.Animation
        | typeof core.Tween
        | typeof core.Timeline
        | typeof Draggable
        | object;

    // querySelector returns type Element | null
    type DOMTarget = Element | string | null | ArrayLike<Element | string | null>;
    type TweenTarget = string | object | null;

    type Callback = (...args: any[]) => void;
    type CallbackType = "onComplete" | "onInterrupt" | "onRepeat" | "onReverseComplete" | "onStart" | "onUpdate";
    type TickerCallback = (time: number, deltaTime: number, frame: number, elapsed: number) => void;

    type Point2D = { x: number, y: number };
    type Position = number | string;

    type FunctionBasedValue<T> = (index: number, target: any, targets: any[]) => T;
    type ArrayValue = any[] | FunctionBasedValue<any[]>;
    type BooleanValue = boolean | FunctionBasedValue<boolean>;
    type NumberValue = number | FunctionBasedValue<number>;
    type StringValue = string | FunctionBasedValue<string>;
    type TweenValue = NumberValue | StringValue;

    interface AnimationVars extends CallbackVars {
        [key: string]: any;

        data?: any;
        id?: string | number;
        inherit?: boolean;
        paused?: boolean;
        repeat?: number;
        repeatDelay?: number;
        repeatRefresh?: boolean;
        reversed?: boolean;
        yoyo?: boolean;
    }

    interface CallbackVars {
        callbackScope?: object;
        onComplete?: Callback;
        onCompleteParams?: any[];
        onRepeat?: Callback;
        onRepeatParams?: any[];
        onReverseComplete?: Callback;
        onReverseCompleteParams?: any[];
        onStart?: Callback;
        onStartParams?: any[];
        onUpdate?: Callback;
        onUpdateParams?: any[];
    }

    interface EaseMap {
        [key: string]: EaseFunction;
    }

    interface EffectsMap {
        [key: string]: any;
    }

    interface GSAPConfig {
        autoKillThreshold?: number;
        autoSleep?: number;
        force3D?: "auto" | boolean;
        nullTargetWarn?: boolean;
        resistance?: number;
        stringFilter?: Callback; // TODO: Find out signature
        unitFactors?: { time?: number, totalTime?: number };
        units?: GSAPUnits
    }

    type GSAPUnits = {
        bottom?: string
        fontSize?: string
        height?: string
        left?: string
        lineHeight?: string
        margin?: string
        padding?: string
        perspective?: string
        right?: string
        rotation?: string
        rotationX?: string
        rotationY?: string
        skewX?: string
        skewY?: string
        top?: string
        width?: string
        x?: string
        y?: string
        z?: string
    } & {
        [key: string]: string
    }

    interface StaggerVars extends CallbackVars, utils.DistributeConfig {
        repeat?: number;
        repeatDelay?: number;
        yoyo?: boolean;
        yoyoEase?: boolean | string | EaseFunction;
    }

    interface Ticker {
        add(callback: TickerCallback): void;

        fps(fps: number): void;

        frame: number;

        lagSmoothing(threshold: number, adjustedLag?: number): void;

        remove(callback: Callback): void;

        sleep(): void;

        tick(): void;

        time: number;

        wake(): void;
    }

    interface TimelineVars extends AnimationVars {
        autoRemoveChildren?: boolean;
        defaults?: TweenVars;
        delay?: number;
        smoothChildTiming?: boolean;
    }

    interface TweenVars extends AnimationVars {
        delay?: TweenValue;
        duration?: TweenValue;
        ease?: string | EaseFunction;
        immediateRender?: boolean;
        lazy?: boolean;
        keyframes?: TweenVars[];
        onInterrupt?: Callback;
        onInterruptParams?: any[];
        overwrite?: "auto" | boolean;
        runBackwards?: boolean;
        stagger?: NumberValue | StaggerVars;
        startAt?: TweenVars;
        yoyoEase?: boolean | string | EaseFunction;
    }

    const effects: EffectsMap;

    const globalTimeline: core.Timeline;

    const ticker: Ticker;

    const version: string;

    function config(config: GSAPConfig): GSAPConfig;
    function config(): GSAPConfig;

    function defaults(defauts: TweenVars): TweenVars;
    function defaults(): TweenVars;

    function delayedCall(delay: number, callback: Callback, params?: any[], scope?: object): core.Tween;

    function exportRoot(vars?: TimelineVars, includeDelayedCalls?: boolean): core.Timeline;

    function from(targets: TweenTarget, vars: TweenVars): core.Tween;
    function from(targets: TweenTarget, duration: number, vars: TweenVars): core.Tween;

    function fromTo(targets: TweenTarget, fromVars: TweenVars, toVars: TweenVars): core.Tween;
    function fromTo(targets: TweenTarget, duration: number, fromVars: TweenVars, toVars: TweenVars): core.Tween;

    function getById<T extends core.Animation>(id: string | number): T;

    function getProperty(targets: TweenTarget, property: string, unit?: string): string | number;
    function getProperty(targets: TweenTarget): (property: string, unit?: string) => string | number;

    function getTweensOf(targets: TweenTarget, onlyActive?: boolean): core.Tween[];

    function install(targets: object): typeof gsap;

    function isTweening(targets: TweenTarget): boolean;

    function killTweensOf(targets: TweenTarget, properties?: object | string, onlyActive?: boolean): void;

    function parseEase(ease: string | EaseFunction): EaseFunction;
    function parseEase(): EaseMap;

    function quickSetter(target: TweenTarget, property: string, unit?: string): (value: any) => void;

    function registerEase(config: { name: string, ease: EaseFunction }): void;

    // TODO: Create interface for effect
    function registerEffect(effect: object): void;

    function registerPlugin(...args: RegisterablePlugins[]): void;

    function set(targets: TweenTarget, vars: TweenVars): core.Tween;

    /**
     *
     *
     * @param {object} [vars]
     * @returns {Timeline} Timeline instance
     * @memberof gsap
     */
    function timeline(vars?: TimelineVars): core.Timeline;

    /**
     * Creates an animation
     *
     * ```js
     *  var tween = gsap.to(".class", { x: 100 });
     * ```
     *
     * @param {*} targets
     * @param {object} vars
     * @returns {Tween} Tween instance
     * @memberof gsap
     */
    function to(targets: TweenTarget, vars: TweenVars): core.Tween;

    /**
     * **Deprecated method signature.** Use the `duration` property instead.
     * ```js
     * tl.to(".class", { duration: 1, x: 100 });
     * ```
     * @deprecated since version 2
     * @param {*} targets
     * @param {number} duration - The duration parameter is deprecated. Use the `duration`
     * property instead.
     * @param {TweenVars} vars
     */
    function to(targets: TweenTarget, duration: number, vars: TweenVars): core.Tween;

    function updateRoot(time: number): void;
}

// TODO: Move to files where declared
declare class TweenLite extends gsap.core.Tween {
}

declare class TweenMax extends gsap.core.Tween {
}

declare class TimelineLite extends gsap.core.Timeline {
}

declare class TimelineMax extends gsap.core.Timeline {
}

declare module "gsap/gsap-core" {

    const _gsap: typeof gsap;

    // TODO: Move to files where declared
    export class TweenLite extends gsap.core.Tween {
    }

    export class TweenMax extends gsap.core.Tween {
    }

    export class TimelineLite extends gsap.core.Timeline {
    }

    export class TimelineMax extends gsap.core.Timeline {
    }

    export {
        _gsap as gsap,
        _gsap as default
    }
}

declare module "gsap/src/gsap-core" {
    export * from "gsap/gsap-core";
    export {gsap as default} from "gsap/gsap-core";
}


declare namespace gsap {

    interface EaseFunction {
        (progress: number): number;
    }

    interface Ease {
        easeIn: EaseFunction;
        easeOut: EaseFunction;
        easeInOut: EaseFunction;
    }

    interface BackConfig extends EaseFunction {
        config(overshoot: number): EaseFunction;
    }

    interface Back {
        easeIn: BackConfig;
        easeOut: BackConfig;
        easeInOut: BackConfig;
    }

    interface EasePack {
        SlowMo: gsap.SlowMo;
        ExpoScaleEase: gsap.ExpoScaleEase;
        RoughEase: gsap.RoughEase;
    }

    interface ElasticConfig extends EaseFunction {
        config(amplitude: number, period?: number): EaseFunction;
    }

    interface Elastic {
        easeIn: ElasticConfig;
        easeOut: ElasticConfig;
        easeInOut: ElasticConfig;
    }

    interface ExpoScaleEase {
        config(startingScale: number, endingScale: number, ease?: string | EaseFunction): EaseFunction;
    }

    interface Linear extends Ease {
        easeNone: EaseFunction;
    }

    interface RoughEaseVars {
        clamp?: boolean;
        points?: number;
        randomize?: boolean;
        strength?: number;
        taper?: "in" | "out" | "both" | "none";
        template?: string | EaseFunction
    }

    interface RoughEaseEase extends EaseFunction {
        config: RoughEaseConfig;
    }

    interface RoughEaseConfig extends EaseFunction {
        (config?: RoughEaseVars): EaseFunction;
    }

    interface RoughEase extends EaseFunction {
        config: RoughEaseConfig;
        ease: RoughEaseEase;
    }

    interface SlowMoEase extends EaseFunction {
        config: SlowMoConfig;
    }

    interface SlowMoConfig extends EaseFunction {
        (linearRatio: number, power?: number, yoyoMode?: boolean): EaseFunction;
    }

    interface SlowMo extends EaseFunction {
        config: SlowMoConfig;
        ease: SlowMoEase;
    }

    interface SteppedEase {
        config(steps: number): EaseFunction;
    }
}

declare const Back: gsap.Back;
declare const Bounce: gsap.Ease;
declare const Circ: gsap.Ease;
declare const Cubic: gsap.Ease;
declare const Elastic: gsap.Elastic;
declare const Expo: gsap.Ease;
declare const Linear: gsap.Linear;
declare const Power0: gsap.Linear;
declare const Power1: gsap.Ease;
declare const Power2: gsap.Ease;
declare const Power3: gsap.Ease;
declare const Power4: gsap.Ease;
declare const Quad: gsap.Ease;
declare const Quart: gsap.Ease;
declare const Quint: gsap.Ease;
declare const Sine: gsap.Ease;
declare const SteppedEase: gsap.SteppedEase;
declare const Strong: gsap.Ease;

declare const EasePack: gsap.EasePack;
declare const ExpoScaleEase: gsap.ExpoScaleEase;
declare const RoughEase: gsap.RoughEase;
declare const SlowMo: gsap.SlowMo;

declare module "gsap/gsap-core" {
    export const Back: gsap.Back;
    export const Bounce: gsap.Ease;
    export const Circ: gsap.Ease;
    export const Cubic: gsap.Ease;
    export const Elastic: gsap.Elastic;
    export const Expo: gsap.Ease;
    export const Linear: gsap.Linear;
    export const Power0: gsap.Linear;
    export const Power1: gsap.Ease;
    export const Power2: gsap.Ease;
    export const Power3: gsap.Ease;
    export const Power4: gsap.Ease;
    export const Quad: gsap.Ease;
    export const Quart: gsap.Ease;
    export const Quint: gsap.Ease;
    export const Sine: gsap.Ease;
    export const SteppedEase: gsap.SteppedEase;
    export const Strong: gsap.Ease;
}

declare module "gsap/EasePack" {
    export const EasePack: gsap.EasePack;
    export const ExpoScaleEase: gsap.ExpoScaleEase;
    export const SlowMo: gsap.SlowMo;
    export const RoughEase: gsap.RoughEase;
    export {EasePack as default};
}

declare module "gsap/src/EasePack" {
    export * from "gsap/EasePack";
    export {EasePack as default} from "gsap/EasePack";
}

declare module "gsap/dist/EasePack" {
    export * from "gsap/EasePack";
    export {EasePack as default} from "gsap/EasePack";
}

declare module "gsap/all" {
    export * from "gsap/EasePack";
}

declare namespace gsap.core {

    // Added to TypeScript 3.5
    // type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

    class Animation {

        static readonly version: string;

        data: any;
        readonly parent: Timeline | null;

        // constructor(vars?: object, time?: number);

        delay(value: number): this;
        delay(): number;

        duration(value: number): this;
        duration(): number;

        endTime(includeRepeats?: boolean): number;

        eventCallback(type: CallbackType, callback: Callback, params?: any[], scope?: object): this;
        eventCallback(type: CallbackType): Callback;

        invalidate(): this;

        isActive(): boolean;

        iteration(value: number, supressEvents?: boolean): this;
        iteration(): number;

        kill(): this;

        pause(atTime?: number, supressEvents?: boolean): this;

        paused(value: boolean): this;
        paused(): boolean;

        play(from?: number | null, supressEvents?: boolean): this;

        progress(value: number, supressEvents?: boolean): this;
        progress(): number;

        rawTime(wrapRepeats?: boolean): number;

        repeat(value: number): this;
        repeat(): number;

        repeatDelay(value: number): this;
        repeatDelay(): number;

        restart(includeDelay?: boolean, supressEvents?: boolean): this;

        resume(from?: number | null, supressEvents?: boolean): this;

        reverse(from?: number | null, supressEvents?: boolean): this;

        reversed(value: boolean): this;
        reversed(): boolean;

        startTime(value: number): this;
        startTime(): number;

        seek(time: number, supressEvents?: boolean): this;

        // then(onFulfilled?: (result: Omit<this, "then">) => any): Promise<this>;

        time(value: number, supressEvents?: boolean): this;
        time(): number;

        timeScale(value: number): this;
        timeScale(): number;

        totalDuration(value: number): this;
        totalDuration(): number;

        totalProgress(value: number, supressEvents?: boolean): this;
        totalProgress(): number;

        totalTime(value: number, supressEvents?: boolean): this;
        totalTime(): number;

        yoyo(value: boolean): this;
        yoyo(): boolean;
    }
}


declare namespace gsap.core {

    class Tween extends Animation {

        data: any;
        vars: TweenVars;

        constructor(targets: TweenTarget, vars: TweenVars, time?: number);
        constructor(targets: TweenTarget, duration: number, vars: TweenVars);

        static to(targets: TweenTarget, duration: number, vars: TweenVars): Tween;
        static to(targets: TweenTarget, vars: TweenVars): Tween;

        static from(targets: TweenTarget, duration: number, vars: TweenVars): Tween;
        static from(targets: TweenTarget, vars: TweenVars): Tween;

        static fromTo(targets: TweenTarget, duration: number, fromVars: TweenVars, toVars: TweenVars): Tween;
        static fromTo(targets: TweenTarget, fromVars: TweenVars, toVars: TweenVars): Tween;

        kill(target?: object, propertiesList?: string): this;

        targets<T>(): T[];
    }
}

declare namespace gsap.core {

    type TimelineChild = string | Animation | Callback | Array<string | Animation | Callback>;

    interface Labels {
        [key: string]: number;
    }

    class Timeline extends Animation {

        autoRemoveChildren: boolean;
        labels: Labels;
        smoothChildTiming: boolean;
        vars: TimelineVars;

        constructor(vars?: TimelineVars, time?: number);

        static updateRoot(time: number): void;

        add(child: TimelineChild, position?: Position): this;

        addLabel(label: string, position?: Position): this;

        addPause(position?: Position, callback?: Callback, params?: any[]): this;

        call(callback: Callback, params?: any[], position?: Position): this;

        clear(labels?: boolean): this;

        currentLabel(value: string): this;
        currentLabel(): string;

        from(targets: TweenTarget, vars: TweenVars, position?: Position): this;
        from(targets: TweenTarget, duration: number, vars: TweenVars, position?: Position): this;

        fromTo(targets: TweenTarget, fromVars: TweenVars, toVars: TweenVars, position?: Position): this;
        fromTo(targets: TweenTarget, duration: number, fromVars: TweenVars, toVars: TweenVars, position?: Position): this;

        getChildren(nested?: boolean, tweens?: boolean, timelines?: boolean, ignoreBeforeTime?: number): Tween[] | Timeline[];

        getTweensOf(targets: TweenTarget, onlyActive?: boolean): Tween[];

        nextLabel(time?: number): string;

        previousLabel(time?: number): string;

        recent<T extends Tween | Timeline>(): T;

        remove(value: TimelineChild): this;

        removeLabel(label: string): number;

        removePause(position: Position): this;

        set(target: TweenTarget, vars: TweenVars, position?: Position): this;

        shiftChildren(amount: number, adjustLabels?: boolean, ignoreBeforeTime?: number): this;

        to(targets: TweenTarget, vars: TweenVars, position?: Position): this;
        to(targets: TweenTarget, duration: number, vars: TweenVars, position?: Position): this;

        tweenFromTo(fromPosition: Position, toPosition: Position, vars?: TweenVars): Tween;

        tweenTo(position: Position, vars?: TweenVars): Tween;
    }
}

declare namespace gsap.utils {

    interface DistributeConfig {
        amount?: number;
        axis?: "x" | "y";
        base?: number;
        each?: number;
        ease?: string | EaseFunction;
        from?: "start" | "center" | "end" | "edges" | "random" | number | [number, number];
        grid?: "auto" | [number, number];
    }

    function checkPrefix(value: string): string;

    function clamp(minimum: number, maximum: number, valueToClamp: number): number;
    function clamp(minimum: number, maximum: number): (valueToClamp: number) => number;

    function distribute(config: DistributeConfig): FunctionBasedValue<number>;

    function getUnit(value: string): string;

    function interpolate<T>(startValue: T, endValue: T, progress: number): T;
    function interpolate<T>(startValue: T, endValue: T): (progress: number) => T;
    function interpolate<T>(array: T[], progress: number): T;
    function interpolate<T>(array: T[]): (progress: number) => T;

    function mapRange(inMin: number, inMax: number, outMin: number, outMax: number, value: number): number;
    function mapRange(inMin: number, inMax: number, outMin: number, outMax: number): (value: number) => number;

    function normalize(inMin: number, inMax: number, value: number): number;
    function normalize(inMin: number, inMax: number): (value: number) => number;
}

declare module "gsap/gsap-core" {
    export const clamp: typeof gsap.utils.clamp;
    export const distribute: typeof gsap.utils.distribute;
    export const getUnit: typeof gsap.utils.getUnit;
    export const interpolate: typeof gsap.utils.interpolate;
    export const mapRange: typeof gsap.utils.mapRange;
    export const normalize: typeof gsap.utils.normalize;
}

declare class Draggable {

    static version: string;
    static zIndex: number;

    readonly autoScroll: number;
    readonly deltaX: number;
    readonly deltaY: number;
    readonly endRotation: number;
    readonly endX: number;
    readonly endY: number;
    readonly isDragging: boolean;
    readonly isThrowing: boolean;
    readonly lockAxis: boolean;
    readonly maxRotation: number;
    readonly maxX: number;
    readonly maxY: number;
    readonly minRotation: number;
    readonly pointerEvent: TouchEvent | PointerEvent;
    readonly pointerX: number;
    readonly pointerY: number;
    readonly rotation: number;
    readonly scrollProxy: any; // TODO: Create interface
    readonly target: HTMLElement | SVGElement;
    readonly tween: gsap.core.Tween;
    readonly vars: Draggable.Vars;
    readonly x: number;
    readonly y: number;

    constructor(target: gsap.DOMTarget, vars?: Draggable.Vars);

    static create(target: gsap.DOMTarget, vars?: Draggable.Vars): Draggable[];

    static get(target: gsap.DOMTarget): Draggable;

    static hitTest(testObject1: Draggable.TestObject, testObject2: Draggable.TestObject, threshold?: number | string): boolean;

    static timeSinceDrag(): number;

    addEventListener(type: Draggable.CallbackType, callback: gsap.Callback): void;

    applyBounds(bound: gsap.DOMTarget | Draggable.BoundsMinMax | Draggable.BoundsRectangle | Draggable.BoundsRotation): void;

    disable(): this;

    dispatchEvent(type: Draggable.CallbackType): boolean;

    enable(): this;

    enabled(): boolean;

    endDrag(event: Event): void;

    getDirection(from: "start" | "velocity" | gsap.DOMTarget): Draggable.Direction;

    hitTest(testObject1: Draggable.TestObject, threshold?: number | string): boolean;

    kill(): this;

    removeEventListener(type: Draggable.CallbackType, callback: gsap.Callback): void;

    startDrag(event: Event): void;

    timeSinceDrag(): number;

    update(applyBounds?: boolean, sticky?: boolean): this;
}

declare namespace Draggable {

    type CallbackType =
        | "click"
        | "drag"
        | "dragend"
        | "dragstart"
        | "move"
        | "press"
        | "release"
        | "throwcomplete"
        | "throwupdate";

    type Direction =
        | "down"
        | "left"
        | "left-down"
        | "left-up"
        | "up"
        | "right"
        | "right-down"
        | "right-up";

    type DraggableType =
        | "left"
        | "left,top"
        | "rotation"
        | "scroll"
        | "scrollLeft"
        | "scrollTop"
        | "top"
        | "top,left"
        | "x"
        | "x,y"
        | "y"
        | "y,x";

    type SnapValue = number[] | ((value: number) => number);
    type TestObject = gsap.DOMTarget | Event | Rectangle;

    interface BoundsMinMax {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    }

    interface BoundsRectangle {
        height: number;
        left: number;
        top: number;
        width: number;
    }

    interface BoundsRotation {
        minRotation: number;
        maxRotation: number;
    }

    interface Rectangle {
        bottom: number;
        left: number;
        right: number;
        top: number;
    }

    interface SnapObject {
        left?: SnapValue;
        points?: gsap.Point2D[] | ((point: gsap.Point2D) => gsap.Point2D);
        radius?: number;
        rotation?: SnapValue;
        top?: SnapValue;
        x?: SnapValue;
        y?: SnapValue;
    }

    interface Vars {
        [key: string]: any;

        activeCursor?: string;
        allowContextMenu?: boolean;
        allowEventDefault?: boolean;
        allowNativeTouchScrolling?: boolean;
        autoScroll?: number;
        bounds?: gsap.DOMTarget | BoundsMinMax | BoundsRectangle | BoundsRotation;
        callbackScope?: object;
        clickableTest?: (this: Draggable, element: HTMLElement | SVGElement) => void;
        cursor?: string;
        dragClickables?: boolean;
        dragResistance?: number;
        edgeResistance?: number;
        force3D?: "auto" | boolean;
        liveSnap?: boolean | SnapValue | SnapObject;
        lockAxis?: boolean;
        maxDuration?: number;
        minDuration?: number;
        minimumMovement?: number;
        onClick?: gsap.Callback;
        onClickParams?: any[];
        onDrag?: gsap.Callback;
        onDragParams?: any[];
        onDragStart?: gsap.Callback;
        onDragStartParams?: any[];
        onDragEnd?: gsap.Callback;
        onDragEndParams?: any[];
        onLockAxis?: (this: Draggable, event: Event) => void;
        onMove?: gsap.Callback;
        onMoveParams?: any[];
        onPress?: gsap.Callback;
        onPressParams?: any[];
        onPressInit?: gsap.Callback;
        onPressInitParams?: any[];
        onRelease?: gsap.Callback;
        onReleaseParams?: any[];
        onThrowComplete?: gsap.Callback;
        onThrowCompleteParams?: any[];
        onThrowUpdate?: gsap.Callback;
        onThrowUpdateParams?: any[];
        overshootTolerance?: number;
        resistance?: number;
        snap?: SnapValue | SnapObject;
        throwResistance?: number;
        trigger?: gsap.DOMTarget;
        type?: DraggableType;
        zIndexBoost?: boolean;
    }
}

declare module "gsap/Draggable" {
    class _Draggable extends Draggable {
    }

    export {
        _Draggable as Draggable,
        _Draggable as default
    }
}

declare module "gsap/src/Draggable" {
    export * from "gsap/Draggable";
    export {Draggable as default} from "gsap/Draggable";
}

declare module "gsap/dist/Draggable" {
    export * from "gsap/Draggable";
    export {Draggable as default} from "gsap/Draggable";
}

declare module "gsap/all" {
    export * from "gsap/Draggable";
}
