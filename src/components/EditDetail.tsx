import styles from "@/styles/postRecordStyle/postRecord.module.css";
import { ChangeEventHandler } from "react";
export const EditNoteTitle = ({
  setTitle,
  title,
  setNote,
  note,
}: {
  setTitle: (newTitle: string) => void;
  title: string;
  setNote: (newNote: string) => void;
  note: string;
}) => {
  const handleTitle: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };
  const handleNote: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setNote(event.target.value);
  };
  return (
    <div className={styles.noteTitleContainer}>
      <div className={styles.eachValue}>
        <p>Transaction TItle</p>
        <input
          placeholder="Title"
          className={styles.title}
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div className={styles.eachValue}>
        <p>Note</p>
        <textarea
          placeholder="Write here"
          className={styles.note}
          value={note}
          onChange={handleNote}
        />
      </div>
    </div>
  );
};
