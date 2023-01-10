<script>
import NewSecret from './NewSecretItem.vue';
import axios from 'axios';

export default {
  data() {
    return {
      domain: 'http://localhost:3000/',
      secret: null,
      remainingViews: 3,
      expiresAfter: 60,
      url: null,
      view: false
    }
  },
  async mounted() {
    let url = window.location.search.substring(1); 
    let params = new URLSearchParams(url);
    let hash = params.get("hash")

    if(hash) {
      var resp = await axios.get('/api/secret/' + hash);
      this.secret = resp.data.secret;
      this.remainingViews = resp.data.remainingViews;
      this.view = true;
    }
  },
  methods: {
    async saveNewSecret() {
        var resp = await axios.post('/api/secret', { 
          secret: this.secret,
          remainingViews: this.remainingViews,
          expiresAfter: this.expiresAfter
        });

        this.url = this.domain + '?hash=' + resp.data.hash;
    },
  },
}
</script>

<template>
  <NewSecret v-if="view">
    <p id="heading">This is your secret:</p>
    <span id="checkedSecret">{{secret}}</span>
    <br />
    You can check it again <span id="remainingViews">{{remainingViews}}</span> times.
    <br />
    <a href="/">Go back and share another secret.</a>
  </NewSecret>

  <NewSecret v-else>
    <p id="heading">Wanna share a new secret?</p>
    Just let me know about it. I will remember it till 30 minutes. As a reminder, you will have the chance to review it 3 times.
    <div>
      <textarea v-model="secret" placeholder="Share your secret" id="label"></textarea>
      <br />
      <label id="label"  for="remainingViews">How many times would you like to check your secret?</label>
      <input type="number" v-model="remainingViews" placeholder="remaining views" min="1" />
      <br />
      <label id="label" for="expiresAfter">How long would you like to have your secret available (minutes)?</label>
      <input type="number" v-model="expiresAfter" placeholder="minutes till expire" min="1" />
      <br />
      <button type="button" @click="saveNewSecret">Keep it as a secret</button>
    </div>
    <div v-if="url">
      <p id="heading">You can find the secret here:</p>
      <a :href="url">{{ url }}</a> 
    </div>
  </NewSecret>
</template>
