<template>
    <div class="h-screen w-full">
        <canvas ref="canvas" class="h-full w-full"></canvas>
    </div>
</template>

<script>
import useParticlesFunctions from './particles-composable'

export default {

    setup () {

        const { canvas, } = useParticlesFunctions()

        return {
            canvas,
        }

    },
}
</script>