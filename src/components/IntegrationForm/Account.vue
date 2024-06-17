<template>
	<form class="selection" @submit.prevent="onSubmit">
		<div class="selection__content">
			<div class="selection__input-container">
				<CustomInput
					placeholder="Название"
					required="true"
					class="selection__input"
					:onChange="(e: any) => name = e.target.value"
				/>
				<CustomInput
					placeholder="Ссылка на сайт"
					required="true"
					class="selection__input"
					:onChange="(e: any) => link = e.target.value"
				/>
			</div>

			<CustomButton class="selection__button modal__button" type="submit">Отправить</CustomButton>
		</div>
	</form>
</template>

<script lang="ts">
export default defineComponent({
	name: "Account",
});
</script>

<script lang="ts" setup>
import { Ref, defineComponent, onMounted, ref } from "vue";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "vue-router";

const emit = defineEmits(["close"]);
const router = useRouter();

const name: Ref<string> = ref("");
const link: Ref<string> = ref("");

// Methods
const close = (): void => {
	emit("close");
};

const onSubmit = async (): Promise<void> => {
    const response: AxiosResponse = await axios.post('some url', {
        data: {
            name: name.value,
            link: link.value
        }
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status !== 200) return;

    // Redirect
    // ...
};
</script>

<style lang="scss" scoped>
.selection {
    margin-top: 25px;

	&__title {
		font: {
			size: 14px;
			weight: 500;
		}

		color: var(--color-white);
		letter-spacing: 0.25px;

		margin-bottom: 16px;
	}

	&__content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__input-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 25px;
        width: 100%;
	}

	&__input {
		width: 100%;
	}

	&__button {
		margin-top: 40px;
		padding-inline: 55px;
	}
}
</style>
