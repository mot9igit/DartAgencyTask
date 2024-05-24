<template>
	<button :class="makeStyles" type="button">
		<svg class="arrow-button__icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M10.7177 19.7071C11.0941 19.3166 11.0941 18.6834 10.7177 18.2929L2.72579 10L10.7177 1.70711C11.0941 1.31658 11.0941 0.683418 10.7177 0.292892C10.3414 -0.0976315 9.73119 -0.0976315 9.35484 0.292892L0 10L9.35484 19.7071C9.73119 20.0976 10.3414 20.0976 10.7177 19.7071Z"
				fill="white"
				fill-opacity="0.35"
			/>
		</svg>
	</button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "ArrowButton",

    props: {
        direction: {
            type: String,
            required: true,
        }
    },
    computed: {
        makeStyles() {
            return {
                "arrow-button": true,
                "arrow-button--left": this.direction === "left",
                "arrow-button--right": this.direction === "right",
            };
        }
    }
});
</script>

<style lang="scss" scoped>
.arrow-button {
    display: flex;
    justify-content: center;
    align-items: center;

    border: var(--border);
    border-color: var(--color-transparent-35-white);
    border-radius: var(--border-radius-circle);

    background-color: var(--color-transparent-5-white);

    width: 56px;
    aspect-ratio: 1;

    transition-duration: var(--transition-duration);

    z-index: 100;

    &:focus,
    &:active,
    &:hover {
        background-color: var(--color-transparent-15-white);
    }

    &--right {
        .arrow-button__icon {
            rotate: 180deg;
        }
    }
}
</style>
