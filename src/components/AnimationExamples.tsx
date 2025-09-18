import React from "react";
import ScrollReveal from "./ScrollReveal";

const AnimationExamples = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
            <div className="max-w-6xl mx-auto">
                {/* Título principal */}
                <ScrollReveal animation="fade-in-up" delay={0.2}>
                    <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
                        Ejemplos de Animaciones con Scroll Reveal
                    </h1>
                </ScrollReveal>

                {/* Grid de ejemplos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Ejemplo 1: Fade In Up */}
                    <ScrollReveal animation="fade-in-up" delay={0.1}>
                        <div className="bg-white rounded-lg shadow-lg p-6 hover-lift">
                            <h3 className="text-xl font-semibold mb-4 text-gray-700">
                                Fade In Up
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Esta animación hace que el elemento aparezca desde
                                abajo con un efecto de desvanecimiento.
                            </p>
                            <div className="w-full h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg"></div>
                        </div>
                    </ScrollReveal>

                    {/* Ejemplo 2: Fade In Left */}
                    <ScrollReveal animation="fade-in-left" delay={0.2}>
                        <div className="bg-white rounded-lg shadow-lg p-6 hover-lift">
                            <h3 className="text-xl font-semibold mb-4 text-gray-700">
                                Fade In Left
                            </h3>
                            <p className="text-gray-600 mb-4">
                                El elemento aparece desde la izquierda con un
                                movimiento suave.
                            </p>
                            <div className="w-full h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg"></div>
                        </div>
                    </ScrollReveal>

                    {/* Ejemplo 3: Scale In */}
                    <ScrollReveal animation="scale-in" delay={0.3}>
                        <div className="bg-white rounded-lg shadow-lg p-6 hover-lift">
                            <h3 className="text-xl font-semibold mb-4 text-gray-700">
                                Scale In
                            </h3>
                            <p className="text-gray-600 mb-4">
                                El elemento crece desde un tamaño pequeño hasta su
                                tamaño normal.
                            </p>
                            <div className="w-full h-32 bg-gradient-to-r from-pink-400 to-red-500 rounded-lg"></div>
                        </div>
                    </ScrollReveal>

                    {/* Ejemplo 4: Bounce In */}
                    <ScrollReveal animation="bounce-in" delay={0.4}>
                        <div className="bg-white rounded-lg shadow-lg p-6 hover-lift">
                            <h3 className="text-xl font-semibold mb-4 text-gray-700">
                                Bounce In
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Una animación con efecto rebote que es perfecta para
                                botones.
                            </p>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                                Botón con Bounce
                            </button>
                        </div>
                    </ScrollReveal>

                    {/* Ejemplo 5: Rotate In */}
                    <ScrollReveal animation="rotate-in" delay={0.5}>
                        <div className="bg-white rounded-lg shadow-lg p-6 hover-lift">
                            <h3 className="text-xl font-semibold mb-4 text-gray-700">
                                Rotate In
                            </h3>
                            <p className="text-gray-600 mb-4">
                                El elemento aparece con una ligera rotación y
                                escala.
                            </p>
                            <div className="w-full h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg"></div>
                        </div>
                    </ScrollReveal>

                    {/* Ejemplo 6: Zoom In */}
                    <ScrollReveal animation="zoom-in" delay={0.6}>
                        <div className="bg-white rounded-lg shadow-lg p-6 hover-lift">
                            <h3 className="text-xl font-semibold mb-4 text-gray-700">
                                Zoom In
                            </h3>
                            <p className="text-gray-600 mb-4">
                                El elemento aparece con un efecto de zoom desde el
                                centro.
                            </p>
                            <div className="w-full h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg"></div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Sección de texto con animaciones escalonadas */}
                <ScrollReveal animation="fade-in-up" delay={0.2}>
                    <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                            Animaciones Escalonadas
                        </h2>

                        <div className="space-y-4">
                            <ScrollReveal animation="fade-in-up" delay={0.3}>
                                <p className="text-lg text-gray-700">
                                    Este párrafo aparece con un pequeño retraso después
                                    del título.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal animation="fade-in-up" delay={0.4}>
                                <p className="text-lg text-gray-700">
                                    Este segundo párrafo tiene un retraso aún mayor.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal animation="fade-in-up" delay={0.5}>
                                <p className="text-lg text-gray-700">
                                    Y este tercer párrafo completa la secuencia
                                    escalonada.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Ejemplo de scroll reveal */}
                <ScrollReveal animation="fade-in-up" delay={0.2}>
                    <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                            Scroll Reveal Automático
                        </h2>
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg">
                            <p className="text-lg">
                                Este elemento usa el componente ScrollReveal y
                                aparecerá automáticamente cuando hagas scroll hasta él.
                                ¡No necesitas JavaScript adicional!
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Ejemplo de hover effects */}
                <ScrollReveal animation="fade-in-up" delay={0.2}>
                    <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                            Efectos Hover
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ScrollReveal animation="fade-in-left" delay={0.3}>
                                <div className="hover-lift bg-gradient-to-r from-teal-400 to-blue-500 text-white p-6 rounded-lg text-center">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Hover Lift
                                    </h3>
                                    <p>
                                        Pasa el mouse sobre este elemento para ver el
                                        efecto de elevación.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-in-right" delay={0.4}>
                                <div className="hover-rotate bg-gradient-to-r from-orange-400 to-red-500 text-white p-6 rounded-lg text-center">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Hover Rotate
                                    </h3>
                                    <p>
                                        Pasa el mouse sobre este elemento para ver la
                                        rotación sutil.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default AnimationExamples;
