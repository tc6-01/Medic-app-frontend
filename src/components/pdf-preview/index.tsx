// ** MUI Imports

// ** Demo Components Imports
import { Box, Stack } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import PDF from "react-pdf-js";
import Loading from '../common/LoadingProgress';
import './styles.css';
import { downloadFile } from 'src/service/medic';
import { FileItemData } from 'src/types/ComponentProps';
import { toLocalTimeString } from 'src/utils/time';
const PdfPreviewWrapper = (props) => {
  const [pdfblob, setPdfBlob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPages] = useState(1);
  const fileData = props.file as FileItemData
  useEffect(() => {	//重点在此！！！！！如何将PDF文件流转base64
    downloadFile(fileData.name).then(res => {
      console.log(res)
      let blob = new Blob([res], { type: "application/pdf" })
      let reader = new FileReader();
      reader.readAsDataURL(blob); // 转换为base64，可以直接放入a标签href
      reader.addEventListener("load", function () {
        let base64 = reader.result as string
        setPdfBlob(base64.split(',')[1])
        setLoading(false)
      });
    })
  }, []);
  let newpdfblob = "data:application/pdf;base64," + pdfblob
  if (!pdfblob) return null

  function onDocumentLoadSuccess(totalPage: any) {
    console.log(totalPage)
    setTotalPages(totalPage);
  }

  function directlyRenderPdf(totalPage: number) {
    const x = [];
    for (let i = 2; i <= totalPage; i++) {
      x.push(
        <Box key={i} justifyContent={'center'} display='flex' sx={{ objectFit: 'contain' }}>
          <PDF workerSrc='pdf.worker.js' page={i} key={`x${i}`} scale={0.8} file={newpdfblob} />
        </Box>)
      x.push(<Box justifyContent={'center'} key={`c${i}`} display='flex'>{i}</Box>)
    }
    return x;
  }

  if (!pdfblob) return null
  return (
    <Loading loading={loading}>
      <Container>
        <Stack spacing={1} alignContent='center' pt={3} pb={3}>
          <Box justifyContent={'center'} display='flex'>{`过期时间:${toLocalTimeString(fileData.expire)}`}</Box>
          <Box justifyContent={'center'} display='flex'>{`剩余使用次数:${fileData.useLimit - fileData.use - 1}`}</Box>
          <Box justifyContent={'center'} display='flex' sx={{ objectFit: 'contain' }}>
            <PDF scale={0.8}
              workerSrc='pdf.worker.js'
              file={newpdfblob}
              onDocumentComplete={onDocumentLoadSuccess}
              page={1} />
          </Box>
          <Box justifyContent={'center'} display='flex'>1</Box>
          {
            totalPage > 1 && directlyRenderPdf(totalPage)
          }
        </Stack>
      </Container>
    </Loading>
  );
}

export default PdfPreviewWrapper
