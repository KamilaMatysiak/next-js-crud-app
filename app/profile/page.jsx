"use client";

import {useState, useEffect} from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/Profile';

const ProfilePage = () => {
  const {data: session} = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  const handleEdit = () => {}
  const handleDelete = async () => {}

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await res.json();
      console.log(data);
      setPosts(data);
    }

    if(session?.user.id) fetchPosts();
  }, [])

  return (
    <Profile
        name="My"
        desc="Welcome to your personalized profile page."
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default ProfilePage