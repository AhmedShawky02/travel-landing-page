/// <reference types="vite/client" />
declare module '@splidejs/react-splide/css';
declare module '@splidejs/react-splide/css/core';
declare module '@splidejs/react-splide' {
    import { ComponentType } from 'react';

    export const Splide: ComponentType<any>;
    export const SplideSlide: ComponentType<any>;
}