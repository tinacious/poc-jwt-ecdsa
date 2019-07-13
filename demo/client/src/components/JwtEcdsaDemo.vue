<template>
  <div>
    <h1>JWT ECDSA Proof of Concept</h1>
    <p>Data is fetched from the server and read using the public key.</p>
    <p>The public key is provided in the response, but it doesn't have to be.</p>

    <h2>Server response</h2>
    <p>Stringified JSON of the response from the server.</p>
    <pre class="code-block">{{server}}</pre>

    <h2>Verified and Decoded data</h2>
    <p>Payload data is decoded with the provided key.</p>
    <pre class="code-block">{{decoded}}</pre>

    <p class="links">
      <small>
        <a class="links__link" href="https://github.com/tinacious/poc-jwt-ecdsa" target="_blank">Github</a>
      </small>
    </p>
  </div>
</template>

<script>
import axios from 'axios';
import { readToken } from '../services/jwt.service';

export default {
  name: "JwtEcdsaDemo",

  data() {
    return {
      server: null,
      decoded: null,
    }
  },

  mounted() {
    const baseUrl = process.env.VUE_APP_PRODUCTION ? '' : 'http://localhost:8000';

    axios
      .get(`${baseUrl}/data`)
      .then(({ data }) => {
        this.server = data;
        this.decoded = readToken(data.encoded, data.public_key);
      });
  },

};
</script>

<style scoped>
  .code-block {
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 60px;
    background: MidnightBlue;
    color: DeepPink;
    overflow-x: scroll;
    font-family: Consolas, Courier, monospace;
  }

  .links {
    text-align: center;
  }

  .links__link {
    color: DeepPink;
  }
</style>
