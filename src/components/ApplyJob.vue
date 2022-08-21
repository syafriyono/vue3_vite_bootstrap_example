<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
	data(){
		return {
			form: {
				displayName: '',
				email: '',
				phone: '',
				message: ''
			}
		}
	},
	methods: {
		dataForm() {
			this.$emit('formEvent', this.form)
			this.form = {
				displayName: '',
				email: '',
				phone: '',
				message: ''
			}
		}
	}
})
</script>
<template>
	<div>
		<h1>Send Your Job Aplication</h1>
		<form class="mt-4">
			<div class="row mb-3">
				<div class="col">
					<label class="form-label">Your Name</label>
    				<input v-model="form.displayName" type="text" class="form-control" placeholder="Enter Your Name">
				</div>
				<div class="col">
					<label class="form-label">Mobile Number</label>
    				<input v-model="form.phone" type="text" class="form-control" placeholder="Enter Your Mobile Number">
				</div>
			</div>
			<div class="row">
				<div class="col">
					<label class="form-label">Email Adress</label>
    				<input v-model="form.email" type="text" class="form-control" placeholder="Enter Your Mail">
				</div>
				<div class="col">
					<label class="form-label">Write Your Message Here..</label>
    				<input v-model="form.message" type="text" class="form-control" placeholder="Write Your Message">
				</div>				
			</div>
		</form>
		<div class="mt-3 mb-4">
			<p>File</p>
			<a class="btn btn-sm btn-warning">Upload</a>
		</div>
		<a @click="dataForm" class="btn btn-sm btn-secondary">Send Message</a>
	</div>
</template>