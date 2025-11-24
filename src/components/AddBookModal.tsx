import { Book } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { mockBooks } from "@/data/mockData";
import { Plus } from "lucide-react";

interface AddBookModalProps {
  open: boolean;
  onClose: () => void;
  onAddBook: (book: Book) => void;
  currentBookIds: string[];
  currentStudent: { id: string; name: string } | null;
}

export const AddBookModal = ({
  open,
  onClose,
  onAddBook,
  currentBookIds,
  currentStudent,
}: AddBookModalProps) => {

  // ✅ Move handleAddBook here INSIDE the component
  const handleAddBook = async (book: Book) => {
    if (!currentStudent) {
      alert("No student selected!");
      return;
    }

    try {
      const response = await fetch(
        `https://raqeem-34ac.onrender.com/users/${currentStudent.id}/books`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ bookId: book.id }),
        }
      );

      if (!response.ok) {
        const err = await response.json();
        alert("Error: " + err.error);
        return;
      }

      alert("Book added successfully!");
      onAddBook(book); // notify parent
      onClose();       // close modal
    } catch (err) {
      console.error(err);
      alert("Failed to add book.");
    }
  };

  const availableBooks = mockBooks.filter(
    (book) => !currentBookIds.includes(book.id)
  );

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>إضافة كتاب جديد</DialogTitle>
        </DialogHeader>

        <div>
          {availableBooks.map((book) => (
            <div key={book.id}>
              <Button onClick={() => handleAddBook(book)}>
                إضافة للمكتبة
              </Button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

