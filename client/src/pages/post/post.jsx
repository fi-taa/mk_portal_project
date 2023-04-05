import React, { useEffect, useState } from 'react';
import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SharePost from './SharePost';

const { Meta } = Card;

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Dummy data array
    const dummyData = [
      {
        id: 1,
        title: 'My first post',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        media: { type: 'image', url: 'https://www.corpgov.net/wp-content/uploads/2009/12/links.jpeg' }
      },
      {
        id: 2,
        title: 'My second post',
        body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        media: { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
      },
      {
        id: 3,
        title: 'My third post',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        media: null
      },
    ];

    setPosts(dummyData);
  }, []);

  const renderMedia = (media) => {
    if (media && media.type === 'image') {
      return <img src={media.url} alt="Post media" className="w-full object-cover" />;
    } else if (media && media.type === 'video') {
      return (
        <div className="flex flex-col w-full h-40">
          <iframe
            title="Post media"
            className="flex justify-center w-full h-40"
            src={media.url}
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <SharePost />
      {posts.map((post) => (
        <Card key={post.id} className="w-full max-w-lg">
          <Meta 
            avatar={<Avatar icon={<UserOutlined />} />}
            title={post.title}
            description={post.body.split('\n').map((text, index) => (
              <span key={index}>
                {text}
                <br />
              </span>
            ))}
          />
          <div className='p-2'>

          </div>
          {renderMedia(post.media)}
        </Card>
      ))}
    </div>
  );
};

export default PostList;
