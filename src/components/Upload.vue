<template>
  <div class="container">
    <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
    <br/><br/>
    <b-button @click="submitFile">Submit</b-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      file: null
    }
  },

  methods: {
    submitFile () {
      let formData = new FormData()
      formData.append('file', this.file)
      axios.post(process.env.COMPUTO_URL + '/files',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function () {
        console.log('File sucessfully uploaded!!')
        window.location.href = '/get-all'
      }).catch(function () {
        console.log('File error!!')
      })
    },

    handleFileUpload () {
      this.file = this.$refs.file.files[0]
    }
  }
}
</script>
<style>
.custom-file{
  width: 50%;
  margin: 20px 0px;
}
</style>
