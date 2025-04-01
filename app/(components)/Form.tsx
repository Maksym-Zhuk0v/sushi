import TBlog from "@/models/types/Blog";
import { Raleway } from "next/font/google";
import React from "react";

const releway = Raleway({
  subsets: ["latin"],
  weight: "300",
});

interface IFormProps {
  form: TBlog;
  setForm: React.Dispatch<React.SetStateAction<TBlog>>;
  setIsUrl: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Form = ({ form, setForm, setIsUrl }: IFormProps) => {
  const handleBodyChange = (index: number, field: string, value: string) => {
    const newBody = form.body.map((paragraph, i) =>
      i === index ? { ...paragraph, [field]: value } : paragraph
    );
    setForm({ ...form, body: newBody });
  };

  const checkImageURL = (url: string) => {
    const img = new Image();
    img.onload = () => {
      setIsUrl(true);
    };
    img.onerror = () => {
      setIsUrl(false);
    };
    img.src = url;
  };

  return (
    <div className={`${releway.className} flex w-full flex-col gap-4 mt-16`}>
      <p>Title</p>
      <input
        value={form["title"]}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        placeholder="Title of your blog"
        className="input-reservation"
      />
      <p>Image</p>
      <input
        value={form["image"]}
        onChange={(e) => {
          setForm({ ...form, image: e.target.value });
          checkImageURL(e.target.value.trim());
        }}
        placeholder="Here should be link of your blog"
        className="input-reservation"
      />
      <div className="w-full py-4">
        <p>Body</p>
        {form.body.map((paragraph, index) => {
          return (
            <div key={index} className="flex flex-col gap-4 mt-4">
              <button
                style={{
                  display: form.body.length <= 1 ? "none" : "block",
                }}
                onClick={() =>
                  setForm({
                    ...form,
                    body: form.body.filter((_, i) => i !== index),
                  })
                }
                className="w-full p-4 bg-text-primary rounded-md text-black text-base"
              >
                Remove this paragraph
              </button>
              <input
                value={paragraph.bodyTitle}
                onChange={(e) =>
                  handleBodyChange(index, "bodyTitle", e.target.value)
                }
                placeholder="Title of your body"
                className="input-reservation"
              />
              <textarea
                value={paragraph.bodyDescription}
                onChange={(e) =>
                  handleBodyChange(index, "bodyDescription", e.target.value)
                }
                className="input-reservation max-h-96 min-h-12"
                placeholder="Description of your body"
              ></textarea>
            </div>
          );
        })}
      </div>
      <button
        onClick={() =>
          setForm({
            ...form,
            body: [
              ...form.body,
              {
                bodyTitle: "",
                bodyDescription: "",
              },
            ],
          })
        }
        className="w-full p-4 bg-text-primary rounded-md text-black text-base"
      >
        Add more
      </button>
    </div>
  );
};
