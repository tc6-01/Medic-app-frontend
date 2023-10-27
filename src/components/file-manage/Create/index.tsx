import { Button, Grid, InputAdornment, Stack, TextField } from "@mui/material";
import { SelectInput, TextInput } from "src/components/common/InputControls";
import { PolicySelectData } from '../../../types/models/DataModels';
import { FolderOpenOutline } from 'mdi-material-ui';
import { useState } from "react";
import { useNavigate } from "react-router";

const CreateFileWrapper = () => {
    const [fileName, setFileName] = useState<string>('');
    const navi = useNavigate()
    const data: PolicySelectData = {
        id: "0",
        index: 0,
        name: "策略1"
    }
    return (
        <Stack spacing={4} pt={3}>
            <Stack display={'flex'} direction={'row'} justifyContent={'center'} alignContent={'end'} spacing={3}>
                <TextField
                    id="input-with-icon-textfield"
                    size="medium"
                    fullWidth
                    disabled
                    value={fileName}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FolderOpenOutline fontSize="large" />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
                <Button variant="contained" component="label" sx={{ minWidth: 100 }}>
                    选择文件
                    <input hidden accept="*" type="file" onChange={(e) => {
                        setFileName(e.target.files[0].name);
                    }} />
                </Button>
            </Stack>
            <SelectInput name="策略选择" placeHolder={'请选择一个策略'} options={[data]} />
            <Button
                fullWidth
                sx={{ mr: 2 }}
                variant="contained"
                onClick={() => {
                    window["javafileUploader"].Upload();
                    navi('/filemanage')
                }}
            >
                添加
            </Button>
        </Stack>
    )
}

export default CreateFileWrapper
