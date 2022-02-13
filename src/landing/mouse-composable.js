import { ref } from "vue";

export default function useMouseFunctions () {
    const canvasReference = ref(null)

    const mouse = ref({
        x: null,
        y: null,
        radius: null,
    })

    const updateMouse = (event) => {

        mouse.value.x = event.x
        mouse.value.y = event.y
        
    }

    window.addEventListener('mousemove', updateMouse)

    const directToCanvas = (memoryLocation) => {
        canvasReference.value = memoryLocation
        mouse.value.radius = (canvasReference.value.height / 80) * (canvasReference.value.width / 80)

        console.log('canvas height', memoryLocation.height)
    }

    return {
        directToCanvas,
        mouse,
    }
}