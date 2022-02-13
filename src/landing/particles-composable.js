import { ref, watch } from "vue";

export default function useParticlesFunctions () {

    const canvas = ref(null)

    watch(canvas, () => console.log('canvas has initiated', canvas.value) )

    return {
        canvas,
    }
}