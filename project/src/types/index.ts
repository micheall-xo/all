export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  timestamp: string;
  likes: number;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  image?: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
}

export interface Story {
  id: string;
  user: User;
  image: string;
  timestamp: string;
}

export interface Message {
  id: string;
  sender: User;
  receiver: User;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'message' | 'follow';
  user: User;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface ChatRoom {
  id: string;
  participants: User[];
  lastMessage?: Message;
  unreadCount: number;
}