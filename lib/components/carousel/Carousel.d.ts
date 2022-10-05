import React from "react";
export declare type CarouselProps = {
    /** Slide list */
    data: any[];
    /** Render method */
    renderItem: (item: any, index: number) => React.ReactElement | JSX.Element;
    /** Whether to scroll automatically */
    autoPlay?: boolean;
    /** Active slide index*/
    currentActiveSlide?: number;
    /** Interval time in ms*/
    intervalTime?: number;
    /** Onchange slide event*/
    onChangeSlide?: (slideIndex: number) => void;
    /** Whether to show the indicator */
    showIndicator?: boolean;
    /** Whether to show the control button */
    showControl?: boolean;
};
export declare type CarouselRef = {
    /** Go to specific slide */
    goTo: (index: number) => void;
    /** Change current slide to next slide*/
    next: () => void;
    /** Change current slide to previous slide */
    prev: () => void;
};
declare const Carousel: React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<unknown>>;
export default Carousel;
