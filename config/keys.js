// File to keep keys. This file shouldnt be uploaded to git

module.exports = {
  google: {
    clientID: '817200818860-0dhi2t7g7kn9qh1om4gl0cmmfefuumbo.apps.googleusercontent.com',
    clientSecret: 'Kx2ixoyt8nptkjbQqBeg1l8b',
    apiKey: 'AIzaSyBS_66b7XnHa2Y2ISXgZWS3POYSK7k7O4E'
  },
  mongodb: {
    dbURI: process.env.dbURI || 'mongodb://127.0.0.1:27017/lyfts'
  },
  session: {
    cookieKey: '7758bf77493skb377sb3h21045'
  }
}
