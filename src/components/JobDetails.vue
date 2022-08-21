<script lang="ts">
import {defineComponent} from 'vue'
import { IForm } from '../interface'
import ApplyJob from './ApplyJob.vue'

export default defineComponent({
	props: {
		title: String,
		description: String,
		skill: Array
	},
	components: {
		ApplyJob 
	},
	methods:{
		formApply(value: IForm){
			this.$emit('formEvent', value)
		}
	}
})
</script>
<template>
	<div class="card bg-secondary bg-opacity-25 shadow border-0">
		<div class="card-body">
			<h1 class="text-success fw-semibold">{{title}}</h1>
			<div class="mt-3" v-html="description"></div>
			<ApplyJob @formEvent="formApply"></ApplyJob>
		</div>
	</div>
</template>