import { ref } from "vue";

export default function useParticleFunctions () {
    class Particle {

        constructor (x, y, directionX, directionY, size, color) {

            this.x = x;
            this.y = y,
            this.directionX = directionX
            this.directionY = directionY
            this.size = size,
            this.color = color

        }

        // Method to draw individual particle
        draw () {

            ctx.value.beginPath()
            ctx.value.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
            ctx.value.fillStyle = '#8c5523'
            ctx.value.fill()
        }

        update () {
            let mouse = mouseReference.value
            let canvas = canvasReference.value

            if (this.x > canvas.width || this.x < 0) {

                this.directionX = -this.directionX
            }

            if (this.y > canvas.height || this.y < 0) {

                this.directionY = -this.directionY
            }

            // Check collision
           
            let dx = mouse.x - this.x
            let dy = mouse.y - this.y
            let distance = Math.sqrt(dx * dx + dy * dy)

            if ( distance < mouse.radius + this.size ) {
                
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                    this.x += 10
                }

                if ( mouse.x > this.x && this.x > this.size * 10) {
                    this.x -= 10
                }

                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                    this.y += 10
                }

                if (mouse.y > this.y && this.y > this.size * 10) {
                    this.y -= 10
                }
            }

            this.x += this.directionX
            this.y += this.directionY
            this.draw()
        }
    }

    const ctx = ref(null)
    const canvasReference = ref(null)
    const mouseReference = ref(null)

    const particlesArray = ref([])

    const directToMotherEnvironment = (canvas, mouse) => {
        
        canvasReference.value = canvas
        ctx.value = canvas.getContext('2d')
        mouseReference.value = mouse

        console.log('Canvas',canvasReference.value)
        console.log('context',ctx.value)
        console.log('Mouse', mouseReference.value)
    }   

    // const directToContext = (memoryLocation) => ctx.value = memoryLocation
    // const directToCanvas = (memoryLocation) => canvasReference.value = memoryLocation
    // const directToMouse = (memoryLocation) => mouseReference.value = memoryLocation

    const initiateParticles = () => {

        let canvas = canvasReference.value

        let numberOfParticles = (canvas.height * canvas.width) / 9000

        for ( let i = 0; i < numberOfParticles; i++) {

            let size = (Math.random() * 5) + 1
            let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2)
            let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2)
            let directionX = (Math.random() * 5) - 2.5
            let directionY = (Math.random() * 5) - 2.5
            let color = '#8c5523'

            particlesArray.value.push(new Particle(x, y, directionX, directionY, size, color))

        }

        console.log('Particles', particlesArray.value)
    }

    const animate = () => {
        requestAnimationFrame(animate)
        ctx.value.clearRect(0, 0, innerWidth, innerHeight)

        particlesArray.value.forEach((particle) => particle.update())
    }


    return {
        directToMotherEnvironment,
        initiateParticles,
        animate,
    }
}