"use client";
import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: string;
    delay?: number;
    duration?: "fast" | "normal" | "slow";
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
    className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    animation = "fadeInUp",
    delay = 0,
    duration = "normal",
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
    className = "",
}) => {
    const { elementRef, isVisible } = useScrollReveal({
        threshold,
        rootMargin,
        triggerOnce,
    });

    // Construir las clases CSS
    const getAnimationClasses = () => {
        const baseClasses = "transition-all ease-out";
        const durationClass = `duration-${duration}`;
        const delayClass = delay > 0 ? `delay-${delay * 100}` : "";

        // Si es visible, aplicar la animación
        if (isVisible) {
            return `${baseClasses} ${durationClass} ${delayClass} animate-${animation}`;
        }

        // Si no es visible, mantener el estado inicial
        return `${baseClasses} ${durationClass} ${delayClass} animate-on-scroll`;
    };

    return (
        <div
            ref={elementRef}
            className={`${getAnimationClasses()} ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
