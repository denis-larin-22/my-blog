import { AnimationObjectsArray, IAnimationValues } from "./types";

// Based on the animation values (y, x, opacity, scale, transition (duration, delay)) object, creates an array of the main objects "initial", "animate" and "transition" for the Framer Motion library
export const _createAnimation = (animationValuesObject: IAnimationValues): AnimationObjectsArray => {
    const initial = {
        y: animationValuesObject.y || 0,
        x: animationValuesObject.x || 0,
        opacity: (animationValuesObject.opacity === undefined) ? 1 : animationValuesObject.opacity,
        scale: (animationValuesObject.scale === undefined) ? 1 : animationValuesObject.scale,
    }

    const animate = {
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1,
    }

    const transition = {
        duration: animationValuesObject.duration || 0.5,
        delay: animationValuesObject.delay || 0
    }

    return [initial, animate, transition]
} 
