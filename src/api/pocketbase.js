import Pocketbase from 'pocketbase';

const pb = new Pocketbase(import.meta.env.VITE_PB_URL);
pb.autoCancellation(false);

export default pb;
