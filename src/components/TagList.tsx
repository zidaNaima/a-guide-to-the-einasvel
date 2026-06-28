import { useState } from "react";

export default function TagList() {
  const [tags, setTags] = useState(["a", "b"]);

  return (
    <div>
      {tags.map(t => (
        <div className="bg-red-100">{t}</div>
      ))}

      <button onClick={() => setTags([...tags, "new"])}>Add</button>
    </div>
  );
}
