"use client";
import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
    threshold?: number; // Porcentaje del elemento que debe ser visible (0-1)
    rootMargin?: string; // Margen alrededor del root
    triggerOnce?: boolean; // Si solo debe activarse una vez
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
    const {
        threshold = 0.1, // 10% del elemento debe ser visible
        rootMargin = "0px 0px -50px 0px", // Margen inferior para activar antes
        triggerOnce = true,
    } = options;

    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Si ya se activó y triggerOnce es true, no hacer nada más
        if (hasTriggered && triggerOnce) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        setHasTriggered(true);
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, rootMargin, triggerOnce, hasTriggered]);

    return { elementRef, isVisible };
};
