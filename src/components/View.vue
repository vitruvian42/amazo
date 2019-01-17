<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <b-table id="my-table" :items="fetchFiles" :fields="fields">
        <template slot="actions" slot-scope="row">
          <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
          <b-button size="sm" :href="row.item.s3_url" class="mr-1">
            Download
          </b-button>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AWS from 'aws-sdk'
AWS.config.update(
  {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.S3_REGION
  }
)
export default {
  data () {
    return {
      fields: [
        {
          key: 'id',
          label: 'Id'
        },
        {
          key: 'filename',
          label: 'Name'
        },
        {
          key: 's3_url',
          label: 'CDN Link'
        },
        {
          key: 'status',
          label: 'Status'
        },
        {
          key: 'actions',
          label: 'Download'
        }
      ]
    }
  },

  methods: {
    fetchFiles () {
      let s3 = new AWS.S3()
      let promise = axios.get(process.env.COMPUTO_URL + '/files')
      return promise.then((response) => {
        let files = response.data.data
        for (let file in files) {
          s3.getSignedUrl('getObject', { Bucket: process.env.S3_BUCKET, Key: files[file].filename }, function (err, url) {
            if (err) {
              console.log(err)
            }
            files[file].s3_url = url
          })
        }
        return (files || [])
      })
    }
  }
}
</script>
