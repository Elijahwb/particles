<template>
    <div ref='canvasContainer' class="h-screen w-full">
        <canvas ref="canvas" class="h-full w-full"></canvas>
    </div>
</template>

<script>
import useFunctionality from './main-composable'

export default {

    setup () {

        const { canvasContainer, canvas, } = useFunctionality()

        return {
            canvasContainer,
            canvas,
        }

    },
}
</script>