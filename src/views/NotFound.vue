<template>
    <div class="not-found">
        <h1 class="not-found__title">Страница не найдена</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    },
    name: "NotFound"
})
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

.not-found {
    &__title {
        font-size: clamp(18px, #{calc(56 * 100 / 1980)}vw, 56px);
    }
}
</style>