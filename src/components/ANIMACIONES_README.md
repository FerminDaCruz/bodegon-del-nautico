# 🎨 Sistema de Animaciones con Scroll Reveal

Este sistema te permite crear animaciones que se activan cuando los elementos son visibles al hacer scroll.

## 🚀 Cómo Usar

### 1. Importar el Componente ScrollReveal

```tsx
import ScrollReveal from "../ScrollReveal";
```

### 2. Envolver tu Contenido

```tsx
<ScrollReveal animation="fade-in-up" delay={0.2}>
    <h1>Mi Título</h1>
</ScrollReveal>
```

## 📋 Animaciones Disponibles

| Animación       | Descripción                | Uso Recomendado      |
| --------------- | -------------------------- | -------------------- |
| `fade-in-up`    | Aparece desde abajo        | Títulos, textos      |
| `fade-in-left`  | Aparece desde la izquierda | Contenido lateral    |
| `fade-in-right` | Aparece desde la derecha   | Contenido lateral    |
| `fade-in`       | Fade simple                | Elementos sutiles    |
| `scale-in`      | Crece desde pequeño        | Imágenes, cards      |
| `rotate-in`     | Aparece con rotación       | Elementos destacados |
| `slide-in-down` | Desliza desde arriba       | Navegación           |
| `bounce-in`     | Efecto rebote              | Botones, CTAs        |
| `zoom-in`       | Zoom desde el centro       | Imágenes principales |

## ⚙️ Propiedades del Componente

```tsx
<ScrollReveal
    animation="fade-in-up" // Tipo de animación
    delay={0.2} // Retraso en segundos
    duration="normal" // fast | normal | slow
    threshold={0.1} // % del elemento visible (0-1)
    rootMargin="0px 0px -50px 0px" // Margen de activación
    triggerOnce={true} // Solo una vez o repetible
    className="mi-clase" // Clases CSS adicionales
>
    <div>Mi contenido</div>
</ScrollReveal>
```

## 🎯 Ejemplos Prácticos

### Título Principal

```tsx
<ScrollReveal animation="fade-in-up" delay={0.2}>
    <h1 className="text-4xl font-bold">Mi Título</h1>
</ScrollReveal>
```

### Imagen con Escala

```tsx
<ScrollReveal animation="scale-in" delay={0.3}>
    <img src="imagen.jpg" alt="Descripción" />
</ScrollReveal>
```

### Texto desde la Izquierda

```tsx
<ScrollReveal animation="fade-in-left" delay={0.4}>
    <p>Mi párrafo de texto</p>
</ScrollReveal>
```

### Botón con Bounce

```tsx
<ScrollReveal animation="bounce-in" delay={0.5}>
    <button className="bg-blue-500 text-white px-6 py-2 rounded">
        Mi Botón
    </button>
</ScrollReveal>
```

### Animaciones Escalonadas

```tsx
<ScrollReveal animation="fade-in-up" delay={0.2}>
  <h2>Título</h2>
</ScrollReveal>

<ScrollReveal animation="fade-in-up" delay={0.3}>
  <p>Primer párrafo</p>
</ScrollReveal>

<ScrollReveal animation="fade-in-up" delay={0.4}>
  <p>Segundo párrafo</p>
</ScrollReveal>
```

## 🎨 Efectos Hover Adicionales

También puedes usar estas clases para efectos al pasar el mouse:

```tsx
<div className="hover-lift">   // Se eleva al hover
<div className="hover-rotate"> // Rota ligeramente al hover
```

## 🔧 Personalización

### Cambiar la Sensibilidad

```tsx
// Se activa cuando el 50% del elemento es visible
<ScrollReveal threshold={0.5}>
    <div>Contenido</div>
</ScrollReveal>
```

### Cambiar el Margen de Activación

```tsx
// Se activa 100px antes de que sea visible
<ScrollReveal rootMargin="0px 0px -100px 0px">
    <div>Contenido</div>
</ScrollReveal>
```

### Animación Repetible

```tsx
// Se anima cada vez que entra y sale de la vista
<ScrollReveal triggerOnce={false}>
    <div>Contenido</div>
</ScrollReveal>
```

## 💡 Consejos

1. **Usa delays escalonados** para crear secuencias fluidas
2. **Combina diferentes animaciones** para variedad visual
3. **No abuses de las animaciones** - menos es más
4. **Prueba en dispositivos móviles** para asegurar buen rendimiento
5. **Usa `scale-in` para imágenes** y `fade-in-up` para textos

## 🐛 Solución de Problemas

### La animación no se activa

-   Verifica que el elemento tenga suficiente altura
-   Ajusta el `threshold` a un valor menor (ej: 0.05)
-   Revisa que no haya errores en la consola

### La animación es muy rápida/lenta

-   Cambia la `duration` a "fast", "normal" o "slow"
-   Ajusta el `delay` según tus necesidades

### Elementos se superponen

-   Asegúrate de que los elementos tengan el espacio suficiente
-   Usa márgenes o padding apropiados
