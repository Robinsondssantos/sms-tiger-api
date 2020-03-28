import axios from 'axios'

import zenviaConfig from '../config/zenvia'

function payloadBuilder (from, to, msg, id) {
  return {
    sendSmsRequest: {
      from,
      to,
      // schedule: new Date(),
      msg,
      // callbackOption: "NONE"
      id
      // aggregatedId: // message agregator
      // flashSms: false // SMS Normal
    }    
  }
}

function headerBuilder (apiKey) {
  return {
    "headers": {
      "Authorization": `Basic ${apiKey}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }
}

class SMS {
  constructor() {
    this.url = zenviaConfig.url,
    this.apiKey = zenviaConfig.apiKey
    this.headers = headerBuilder(this.apiKey)
  }

  async send(from, to, msg, id) {
    return await axios.post(
      this.url,
      payloadBuilder(from, to, msg, id),
      this.headers
    )
  }
}

export default new SMS()

