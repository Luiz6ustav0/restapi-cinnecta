# Text To Vecs API 🌐

This is an api I made for a test from Cinnecta. It basically receives texts and creates a vocabulary from them, after that it creates word frequency vectors for each of the texts sent based in the vocabulary created.

### Setup :computer:
##### OBS: I used MongoDB's Atlas as a database, so you should set your own up and put the sensitive info on your .secrets.js file after cloning this repo. The other option is to set up mongo locally and fix the mongoose connection.

After cloning this repository, all you need to do is this and you should be good to go:

```javascript
npm install
npm start
```
#### Docker 🐋 
If you want to use Docker to run this, I understand you, I like it too! There's a Dockerfile in this repository, after cloning you can build the image and use something like this to run your app:
```bash
docker run -p 3000:3000 <image-id or name>
```

### Endpoints 📥

#### POST /text_api

This endpoint is the one used to send all the texts, they should be sent using the request's body, something like:
```json
// POST request body
{
  "text_1": "I like to eat salad",
  "text_2": "Salad is delicious, it's all I want to eat",
   "text3": "Not a big fan, my friend",
   "AnotherText": "Geez, my friend only buys salad nowadays"
}
```
#### GET text_api/vocab

This endpoint is used to get the vocabulary created with the previously sent texts. It also has an optional parameter called _two_words_ that should be set to _true_ if you want to get the vocabulary made with all the pairs of words.
```json
...:3000/text_api/vocab
or
...:3000/text_api/vocab?two_words=true
```

#### GET text_api/wordfreq

This endpoint is used to get the frequency vectors created based on the previously sent texts. Like before, it also has an optional parameter called _two_words_ that should be set to _true_ if you want to get the frequency vectors made based on the vocabulary created with pairs of words. It's important to notice that the response will send back a json with all frequency vectors ordered in the same order from the texts when they were sent. 
```json
...:3000/text_api/wordfreq
or
...:3000/text_api/wordfreq?two_words=true
```

#### DELETE text_api/clean

This endpoint is used delete all collections created so far in the database.
```json
...:3000/text_api/clean
```
