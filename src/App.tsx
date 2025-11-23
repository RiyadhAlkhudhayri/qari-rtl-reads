import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import { Student } from "./types";

const queryClient = new QueryClient();

const App = () => {
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null);

  const handleLogin = async (name: string, universityId: string) => {
  try {
    // 1) Try to get the user by ID
    let response = await fetch(`https://raqeem-34ac.onrender.com/users/${universityId}`);

    if (response.ok) {
      const backendUser = await response.json();
      const student: Student = {
        id: backendUser.id,
        name: backendUser.name,
        universityId: backendUser.id,
        totalPagesRead: backendUser.progress?.booksRead || 0,
        avatar: "/default-avatar.png"
      };
      setCurrentStudent(student);
      return;
    }

    // 2) User not found → create/login user
    response = await fetch("https://raqeem-34ac.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, universityId })
    });

    if (!response.ok) throw new Error("Failed to login or create user");

    const backendUser = await response.json();
    const student: Student = {
      id: backendUser.id,
      name: backendUser.name,
      universityId: backendUser.id,
      totalPagesRead: backendUser.progress?.booksRead || 0,
      avatar: "/default-avatar.png"
    };

    setCurrentStudent(student);
  } catch (error) {
    alert("Login failed: " + (error as Error).message);
  }
};

  const handleLogout = () => {
    setCurrentStudent(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" />
        {currentStudent ? (
          <Dashboard currentStudent={currentStudent} onLogout={handleLogout} />
        ) : (
          <Index onLogin={handleLogin} />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
