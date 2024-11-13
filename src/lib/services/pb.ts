import PocketBase from 'pocketbase';

// TODO: Update to gist or env variable for production
const pb = new PocketBase('http://tundra.local:8090'); // only local url for devserver

export default pb;
