import { Provider } from 'reto';
import SharedToMeWrapper from '../../components/file-share/shared-to-me/SharedToMe';
import { SharedToMeStore } from '../../states/page/file-share/sharedtome/index';
const SharedToMePage = () => {
    return (
        <Provider of={SharedToMeStore}>
            <SharedToMeWrapper />
        </Provider>
    )
}

export default SharedToMePage
