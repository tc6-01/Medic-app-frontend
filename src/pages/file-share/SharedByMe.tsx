import SharedByMeWrapper from '../../components/file-share/shared-by-me/SharedByMe';
import { Provider } from 'reto';
import { SharedByMeStore } from 'src/states/page/file-share/sharedbyme';
const SharedByMePage = () => {
    return (
        <Provider of={SharedByMeStore}>
            <SharedByMeWrapper />
        </Provider>
    )
}

export default SharedByMePage
