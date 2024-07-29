<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AvatarListPage from "@/pages/AvatarList";

const container = document.getElementById("react-app");
=======
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AvatarListPage from '@/pages/AvatarList';

const container = document.getElementById('react-app');
>>>>>>> 76bea16fd502ed1bdf187379666c891a12997fc4

if (container) {
  createRoot(container).render(
    <StrictMode>
      <AvatarListPage />
    </StrictMode>
  );
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
