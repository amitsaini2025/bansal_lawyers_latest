"use client";

import { useEffect, useState } from "react";

export function BlogPhotoField({
  currentSrc,
  hasCustomPhoto,
  missing = false,
}: {
  currentSrc: string;
  hasCustomPhoto: boolean;
  missing?: boolean;
}) {
  const [preview, setPreview] = useState(currentSrc);
  const [note, setNote] = useState("");

  useEffect(() => {
    return () => {
      if (preview.startsWith("blob:")) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="blog-photo">
      <span className="rte-field__label">Photo</span>
      {preview ? <img className="blog-photo__preview" src={preview} alt="" /> : null}
      <input
        name="photo"
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={(event) => {
          const file = event.target.files?.[0];
          setPreview((current) => {
            if (current.startsWith("blob:")) URL.revokeObjectURL(current);
            return file ? URL.createObjectURL(file) : currentSrc;
          });
          setNote(file ? `${file.name} is cropped to 16:9 and saved as WebP when you save.` : "");
        }}
      />
      <p className="rte__hint">
        Best size is 1600×900 or larger. Saving creates a 960×540 thumbnail for the list and a photo up to 1600×900
        for the page. Both are 16:9 WebP.
      </p>
      {missing ? (
        <p className="rte__hint">
          The saved photo file is missing, so this page is showing the standard image. Choose a new photo, or remove it.
        </p>
      ) : null}
      {note ? <p className="rte__hint">{note}</p> : null}
      {hasCustomPhoto ? (
        <label className="blog-photo__remove">
          <input name="remove_photo" type="checkbox" value="1" />
          Remove photo
        </label>
      ) : null}
    </div>
  );
}
