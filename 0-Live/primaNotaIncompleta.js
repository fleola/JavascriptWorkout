function firstUncompletedNote(notes) {
  let uncNote;

  notes.forEach((note) =>
    note.todos.forEach((todo) => {
      if (Object.values(todo).includes(false) && !uncNote) uncNote = note;
    })
  );
  return uncNote;
}
