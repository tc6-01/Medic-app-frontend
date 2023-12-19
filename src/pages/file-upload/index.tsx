import { Provider } from "reto";
import FileUploadWrapper from "src/components/file-manage/Upload";
import { UploadPageStore } from "src/states/page/upload-file";

const FileUploadPage = () => {
    return (
      <Provider of={UploadPageStore} memo>
        <FileUploadWrapper />
      </Provider>
    )
  }
  
  export default FileUploadPage