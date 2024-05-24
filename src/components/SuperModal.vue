<template>
	<dialog class="modal" id="edoModal" aria-labelledby="modalTitle">
		<div class="modal__content">
			<header class="modal__header">
				<h5 class="modal__title" id="modalTitle">{{ title }}</h5>
				<form method="dialog">
                    <CloseButton @click="close" />
                </form>
			</header>

			<slot></slot>
		</div>
	</dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "SuperModal",

	setup() {
		return {};
	},
	props: {
        title: {
            type: String,
            required: false
        }
    },
    methods: {
        close(): void{
            this.$emit("close");
        }
    }
    
});
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

.modal {
	@include flex-center;

	background: url("/img/background/fog.png") repeat-x center center / cover;

    animation: bd-animation 10s infinite;

	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

    width: 100vw;
    height: 100dvh;

    z-index: 1000;

    .selection {
        @include flex-center;
        flex-direction: column;
    }

	&__content {
		background-color: var(--color-black);
		border-radius: var(--border-radius);

		width: 451px;
		max-height: 90%;

		padding: 40px;

		overflow: hidden;

		.modal__header {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			gap: 16px;

			margin-bottom: 16px;

			.modal__title {
				font: {
					size: 20px;
					weight: 500;
				}

                color: var(--color-white);
			}
		}

		&__text-container {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}

		.modal__text {
			font: {
				size: 14px;
				weight: 400;
			}

            color: var(--color-light-dark-gray);
			letter-spacing: 0.25px;
			line-height: 106%;
		}
	}

	@keyframes bg-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
}
</style>
