<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { defineComponent} from 'vue'
import axios from 'axios'
import Job from './components/Job.vue'
import JobDetails from './components/JobDetails.vue'
import { IDetails, IForm, ISubmitForm } from './interface'

export default defineComponent({
	data(){
		return {
			dataRequest: {
				displayName: '',
				subject: '',
				email: '',
				phone: '',
				message: '',
				ptJobApplyType: "APPLICATION",
				isActive: false,
				ptJobPost: ''
			},
			jobs: [],
			detail: {
				id: 0,
				title: '',
				description: '',
				skill: [{
					id: 0,
					name: ''
				}]
			}
		}
	},
	async created(){
		let { data }= await axios.get('http://127.0.0.1:5000/services/btiportalcorems/api/pt-job-posts/no-auth')
		this.jobs = data
		let detail: IDetails = {
			id: data[0].id,
			title: data[0].title,
			description: data[0].description.txt,
			skill: data[0].ptJobSkills
    	}
		this.detail = detail 
	},
	components:{
		Job, JobDetails
	},
	methods:{
		details(value: IDetails){
			this.detail = value;
		},
		formApply(value: IForm){
			this.dataRequest.displayName = value.displayName
			this.dataRequest.email = value.email
			this.dataRequest.phone = value.phone
			this.dataRequest.message = value.message
			this.submitApply(this.dataRequest)
		},
		async submitApply(data: ISubmitForm){
			await axios.post('http://127.0.0.1:5000/services/btiportalcorems/api/pt-job-applies/no-auth', data)

			this.dataRequest= {
				displayName: '',
				subject: '',
				email: '',
				phone: '',
				message: '',
				ptJobApplyType: "APPLICATION",
				isActive: false,
				ptJobPost: ''
			}
		}
	},
	watch:{
		detail(newDetail){
			this.dataRequest.subject = newDetail.title
			this.dataRequest.ptJobPost = newDetail.id
		}
	}
})

</script>

<template>
	<div class="container">
		<div class="mb-2" v-for="job in jobs" v-bind:key="job.id">
			<Job 
				:title=job.title 
				:id=job.id 
				:description="job.description.txt" 
				:skill="job.ptJobSkills" 
				@detailsEvent="details">
			</Job>
   		</div>
		<div>
			<JobDetails 
				:title="detail.title" 
				:description="detail.description" 
				:skill="detail.skill"
				@formEvent="formApply">
			</JobDetails>
   		</div>
	</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
