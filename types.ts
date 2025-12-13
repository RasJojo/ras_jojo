import React from 'react';

export interface Technology {
  name: string;
  icon?: React.ReactNode;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Hackathon {
  id: string;
  name: string;
  project: string;
  award: string;
  year: string;
  description: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  technologies: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}