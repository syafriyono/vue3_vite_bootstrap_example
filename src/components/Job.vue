<script lang="ts">
import { defineComponent } from 'vue'
import { IDetails, ISkill } from '../interface'

export default defineComponent({
	props:{
		id: {type: Number, required: true},
		title: {type: String, required: true},
		description: {type: String, required: true},
		skill: {type: Array(), required: true}
	},
	methods:{
		details(){
			let details: IDetails = {
				id: this.id,
				title: this.title, 
				description: this.description,
				skill: this.skill
			}
			this.$emit('detailsEvent', details)
		}
	}
})
</script>
<template>
	<div class="card bg-secondary bg-opacity-25 shadow border-0" style="width: 24rem;">
		<div class="card-body pt-2 pb-2">
			<div class="row">
				<div class="col-8"><p class="card-text text-success fw-semibold">{{title}}</p></div>
				<div class="col"><button @click="details" type="button" class="btn btn-sm btn-warning text-white fw-semibold">See Job</button></div>
			</div>
		</div>
	</div>
</template>