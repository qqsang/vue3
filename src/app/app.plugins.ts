import { Plugin } from 'vuex';
import { RootState } from '@/app/app.store';
const logger: Plugin<RootState> = store => {
  store.subscribe((mutations, state) => {
    console.log('logger:', mutations, state);
  })
}
export default logger;