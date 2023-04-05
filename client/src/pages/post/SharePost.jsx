import React, { useState } from 'react';
import { Button, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';

const SharePost = () => {
  const [postText, setPostText] = useState('');
  const [fileList, setFileList] = useState([]);

  const handleTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleSubmit = () => {
    // Make a POST request to your backend API using Axios or Fetch
    // with the postText and fileList data
  };

  return (
    <div className="flex items-center space-x-4">
      <TextArea
        placeholder="Write something..."
        value={postText}
        onChange={handleTextChange}
      />
      <Upload
        accept="image/*,video/*"
        fileList={fileList}
        onChange={handleFileChange}
        showUploadList={true}
      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
      <Button onClick={handleSubmit}>Share</Button>
    </div>
  );
};

export default SharePost;
