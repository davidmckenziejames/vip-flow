import React, { useCallback, useEffect, useRef, useState } from "react";
import * as LR from "@uploadcare/blocks";
import { OutputFileEntry } from "@uploadcare/blocks";
LR.registerBlocks(LR);

type FileUploaderProps = {
  files: OutputFileEntry[];
  onChange: (files: OutputFileEntry[]) => void;
};

export default function FileUploader({ files, onChange }: FileUploaderProps) {
  const [uploadedFiles, setUploadedFiles] = useState<OutputFileEntry[]>([]);
  const ctxProviderRef = useRef<LR.UploadCtxProvider>();

  const handleRemoveClick = useCallback(
    (uuid: OutputFileEntry["uuid"]) =>
      onChange(files.filter((f) => f.uuid !== uuid)),
    [files, onChange]
  );

  useEffect(() => {
    const handleUploadEvent = (e: CustomEvent<{ data: OutputFileEntry[] }>) => {
      if (e.detail?.data) {
        setUploadedFiles([...e.detail.data]);
      }
    };

    window.addEventListener("LR_DATA_OUTPUT", handleUploadEvent);

    return () => {
      window.removeEventListener("LR_DATA_OUTPUT", handleUploadEvent);
    };
  }, [setUploadedFiles]);

  useEffect(() => {
    const resetUploaderState = () =>
      ctxProviderRef.current?.uploadCollection.clearAll();

    const handleDoneFlow = () => {
      resetUploaderState();

      onChange([...files, ...uploadedFiles]);
      setUploadedFiles([]);
    };

    window.addEventListener("LR_DONE_FLOW", handleDoneFlow);

    return () => {
      window.removeEventListener("LR_DONE_FLOW", handleDoneFlow);
    };
  }, [files, onChange, uploadedFiles, setUploadedFiles]);

  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey="eff1e00bcf9b4c8e3bba"
        multiple={true}
        sourceList="local, url, camera, dropbox, gdrive"
        confirmUpload={false}
        removeCopyright={true}
        imgOnly={true}
      ></lr-config>

      <lr-file-uploader-inline ctx-name="my-uploader"></lr-file-uploader-inline>

      <lr-upload-ctx-provider ctx-name="my-uploader" ref={ctxProviderRef} />
    </div>
  );
}
