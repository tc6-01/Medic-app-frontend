import { sizeToString } from 'src/utils/sizeToString';
import { toLocalTimeString } from 'src/utils/time';
import FileItem from "../FileItem";
import FileState from '../FileState';
import VerticalList from "../VerticalList";
import PolicyItem from '../PolicyItem/index';
import { PolicyListProps } from 'src/types/ComponentProps';


const PolicyList = ({ items, onDetailClick }: PolicyListProps) => {
    return (
        <VerticalList items={
            items.map((item, index) => {
                return <PolicyItem key={index}
                    name={item.name}
                    onDetailClick={() => onDetailClick(index)}
                    createdTime={item.createdTime}
                    description={item.description} />
            })
        } />
    )

}


export default PolicyList
