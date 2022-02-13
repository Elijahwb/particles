import { ref,  watch } from "vue";
import useMouseFunctions from "./mouse-composable";
import useParticleFunctions from "./particle-composable";

export default function useFunctionality () {

    const { directToCanvas, mouse } = useMouseFunctions()

    const { directToMotherEnvironment, initiateParticles, animate } = useParticleFunctions()

    const canvas = ref(null)
    const canvasContainer = ref(null)

    watch(canvas,() => {
        if (canvas.value) {
            if (canvasContainer.value ) {
                canvas.value.width = canvasContainer.value.innerWidth
                canvas.value.height = canvasContainer.value.innerheight
            }
            // ctx.value = canvas.value.getContext('2d')

            console.log('initialization hiehgt', canvas.value.height)

            directToCanvas(canvas.value)

            directToMotherEnvironment(canvas.value, mouse.value)
            initiateParticles()
            animate()

        }
    })



    return {
        canvas,
    }
}