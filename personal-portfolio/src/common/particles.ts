export const particlesOptions = {
    background: {
        color: {
            value: "#0d47a1",
        },
    },
    fpsLimit: 80,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 40,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    }, 
    particles: {
        color: {
            value: "#00FF00",
        },
        links: {
            color: "#00FF00",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};