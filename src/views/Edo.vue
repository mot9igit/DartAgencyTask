<template>
	<section class="edo">
		<ArrowButton direction="left" class="edo__arrow" />

		<div class="edo__img-container img-container">
			<img :src="company.image" class="edo__img" />
			<CardTitle class="img-container__title">{{ company.title }}</CardTitle>
		</div>

		<div class="edo__content">
			<CustomTitle class="edo__title" text="Есть ли у вас" span="ЭДО">?</CustomTitle>
			<EdoSelect />
            <CustomButton class="edo__button" theme="red">Далее</CustomButton>
		</div>
	</section>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";

import { companies } from "../data/Companies";
import { CompanyType } from "../types/SelectCompanyPageTypes";

import EdoSelect from "../components/Edo/EdoSelect.vue";

export default defineComponent({
	setup() {
		const company: Ref<CompanyType> = ref({} as CompanyType);

		return {
			company,
		};
	},
	props: {
		cardNumber: {
			type: Number,
			default: 0,
		},
	},
    components: {
        EdoSelect
    },
	computed: {
		getCompany(): void {
			this.company = companies.find((company) => company.id == this.cardNumber) as CompanyType;
		},
	},
});
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

.edo {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    position: relative;

    padding-inline: 195px;

    height: 100dvh;
    width: 100vw;

    &__arrow {
        position: absolute;
        left: 195px;
        top: 118px;
    }

    &__img-container {
        position: relative;

        .edo__img {
            width: 598px;
            height: 944px;
            object-fit: contain
        }    

        .img-container__title {
            position: absolute;
            left: 0;
            bottom: 131px;

            width: 483px;
        }
    }

    &__content {
        @include flex-center;
        @include absolute-center;

        flex-direction: column;

        top: 107px;
        translate: -50% 0;
        
        .edo__title {
            margin-bottom: 80px;
        }

        .edo__button {
            margin-top: 40px;

            width: 241px;
            height: 50px;
        }
    }
}

</style>
