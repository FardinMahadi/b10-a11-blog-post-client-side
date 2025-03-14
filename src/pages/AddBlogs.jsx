import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const AddBlogs = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [featured, setFeatured] = useState(false);
  const [status, setStatus] = useState("published");

  const { user } = useContext(AuthContext);

  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const createShortDescription = (desc) => {
    // Truncate the description to the first 100 characters or the first sentence
    return desc.length > 100 ? `${desc.substring(0, 100)}...` : desc;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      description,
      category,
      image,
      tags,
      featured,
      author_email: user.email,
      author_name: user.displayName,
      author_avatar: user.photoURL,
      short_description: createShortDescription(description),
      description,
      status,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };
    axios
      .post("https://blog-post-server-side.vercel.app/blogs", newBlog)
      .then((res) => {
        toast.success("Blog added successfully!", {
          draggable: true,
          transition: Flip,
        });
      })
      .catch((err) => {
        console.log("Error: ", err.message);
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center my-10 text-text-light dark:text-text-dark">
        Add New Blog
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-text-secondary-light dark:text-text-secondary-dark"
      >
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-background-secondary-light dark:bg-background-secondary-dark"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-background-secondary-light dark:bg-background-secondary-dark"
            rows="4"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-background-secondary-light dark:bg-background-secondary-dark"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Image URL</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-background-secondary-light dark:bg-background-secondary-dark"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Tags</label>
          <div className="flex">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-background-secondary-light dark:bg-background-secondary-dark"
              placeholder="Add a tag"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="ml-2 bg-blue-500 text-white rounded-md px-4 py-2"
            >
              Add
            </button>
          </div>
          <div className="mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-background-secondary-light dark:bg-background-secondary-dark"
          >
            <option value="published">Published</option>
            <option value="not published">Not Published</option>
          </select>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={featured}
              onChange={() => setFeatured(!featured)}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Featured</span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md px-4 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlogs;
