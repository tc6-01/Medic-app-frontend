import { Provider } from 'reto';
import SharingDetailsWrapper from 'src/components/file-share/details/Details';
import { LoadingStore } from 'src/states/common/LoadingStore';
const SharingDetailsPage = () => {
    return (
        <Provider of={LoadingStore} memo>
            <SharingDetailsWrapper />
        </Provider>
    )
}

export default SharingDetailsPage