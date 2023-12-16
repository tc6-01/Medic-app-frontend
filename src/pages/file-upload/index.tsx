import { Provider } from "reto";
import RegisterWindow from "src/components/common/RegisterWindow";
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