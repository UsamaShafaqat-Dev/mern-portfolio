import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import toast from "react-hot-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // --- STATES ---
  const [activeTab, setActiveTab] = useState("projects");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    badge: "Full Stack",
    tags: "",
    liveLink: "",
    githubLink: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  // --- SECURITY CHECK ON LOAD ---
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      toast.error("Please login to access the dashboard.");
      navigate("/login"); // Agar token nahi hai toh login pe bhejo
      return;
    }
    fetchProjects();
    fetchMessages();
  }, [navigate]);

  // --- LOGOUT HANDLER ---
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    toast.success("Logged out successfully.");
    navigate("/login");
  };

  // --- FETCH PROJECTS & MESSAGES ---
  const fetchProjects = async () => {
    try {
      const res = await fetch("https://portfolio-backend-zh1h.onrender.com/api/projects");
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      toast.error("Projects load nahi ho rahay.");
    }
  };

  const fetchMessages = async () => {
    try {
      const res = await fetch("https://portfolio-backend-zh1h.onrender.com/api/messages");
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      toast.error("Messages load nahi ho rahay.");
    }
  };

  // --- HANDLERS ---
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFileChange = (e) => setImageFile(e.target.files[0]);

  const handleAddNew = () => {
    setEditId(null);
    setFormData({
      title: "",
      description: "",
      badge: "Full Stack",
      tags: "",
      liveLink: "",
      githubLink: "",
    });
    setImageFile(null);
    setIsFormOpen(true);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
    setEditId(null);
  };

  const handleEdit = (project) => {
    setEditId(project._id);
    setFormData({
      title: project.title,
      description: project.description,
      badge: project.badge,
      tags: project.tags.join(", "),
      liveLink: project.liveLink || "",
      githubLink: project.githubLink || "",
    });
    setIsFormOpen(true);
  };

  // --- DELETE CONFIRMATION (PROJECTS) ---
  const confirmDelete = async (id, toastId) => {
    toast.dismiss(toastId);
    const loadingToast = toast.loading("Deleting project...");
    try {
      const res = await fetch(`https://portfolio-backend-zh1h.onrender.com/api/projects/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Project deleted successfully!", { id: loadingToast });
        fetchProjects();
      } else {
        toast.error("Delete karne mein masla aaya.", { id: loadingToast });
      }
    } catch (error) {
      toast.error("Server error.", { id: loadingToast });
    }
  };

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-3">
          <p className="font-medium text-gray-800 text-sm md:text-base">
            Kiya aap waqai is project ko delete karna chahte hain?
          </p>
          <div className="flex justify-end gap-3 mt-2">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => confirmDelete(id, t.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30"
            >
              Yes, Delete
            </button>
          </div>
        </div>
      ),
      { duration: Infinity, position: "top-center" },
    );
  };

  // --- DELETE CONFIRMATION (MESSAGES) ---
  const confirmDeleteMessage = async (id, toastId) => {
    toast.dismiss(toastId);
    const loadingToast = toast.loading("Deleting message...");
    try {
      const res = await fetch(`https://portfolio-backend-zh1h.onrender.com/api/messages/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Message deleted successfully!", { id: loadingToast });
        fetchMessages();
      } else {
        toast.error("Delete karne mein masla aaya.", { id: loadingToast });
      }
    } catch (error) {
      toast.error("Server error.", { id: loadingToast });
    }
  };

  const handleDeleteMessage = (id) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-3">
          <p className="font-medium text-gray-800 text-sm md:text-base">
            Kiya aap is message ko delete karna chahte hain?
          </p>
          <div className="flex justify-end gap-3 mt-2">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => confirmDeleteMessage(id, t.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30"
            >
              Yes, Delete
            </button>
          </div>
        </div>
      ),
      { duration: Infinity, position: "top-center" },
    );
  };

  // --- FORM SUBMIT HANDLER ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editId && !imageFile) {
      toast.error("Pehle computer se ek image select karein!");
      return;
    }

    setUploading(true);
    const loadingToast = toast.loading(
      editId ? "Updating project..." : "Uploading & saving...",
    );

    try {
      let uploadedImageUrl = "";
      if (imageFile) {
        const imageFormData = new FormData();
        imageFormData.append("file", imageFile);
        imageFormData.append(
          "upload_preset",
          import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
        );
        imageFormData.append(
          "cloud_name",
          import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        );

        const cloudinaryRes = await fetch(
          `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
          { method: "POST", body: imageFormData },
        );
        const cloudinaryData = await cloudinaryRes.json();
        if (!cloudinaryData.secure_url)
          throw new Error("Cloudinary upload failed!");
        uploadedImageUrl = cloudinaryData.secure_url;
      }

      const tagsArray = formData.tags.split(",").map((tag) => tag.trim());
      const projectData = {
        ...formData,
        tags: tagsArray,
        ...(uploadedImageUrl && { imageUrl: uploadedImageUrl }),
      };

      const url = editId
        ? `https://portfolio-backend-zh1h.onrender.com/api/projects/${editId}`
        : "https://portfolio-backend-zh1h.onrender.com/api/projects";
      const method = editId ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        toast.success(editId ? "Project updated!" : "Project added!", {
          id: loadingToast,
        });
        setIsFormOpen(false);
        fetchProjects();
      } else {
        toast.error("Database error aaya.", { id: loadingToast });
      }
    } catch (error) {
      console.error(error);
      toast.error("Server ya Upload connect nahi ho raha.", {
        id: loadingToast,
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 px-8 pb-12">
      <div className="max-w-5xl mx-auto">
        {/* --- HEADER & TABS --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white">
              Admin <span className="text-primary">Dashboard</span>
            </h2>
            <button
              onClick={handleLogout}
              className="text-xs bg-red-600/10 text-red-400 border border-red-600/20 hover:bg-red-600 hover:text-white px-3 py-1.5 rounded-lg font-medium transition"
            >
              Logout 🔒
            </button>
          </div>

          <div className="flex bg-cardBg border border-gray-800 rounded-lg p-1 shadow-lg">
            <button
              onClick={() => {
                setActiveTab("projects");
                setIsFormOpen(false);
              }}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${activeTab === "projects" ? "bg-primary text-white" : "text-gray-400 hover:text-white"}`}
            >
              Manage Projects
            </button>
            <button
              onClick={() => {
                setActiveTab("messages");
                setIsFormOpen(false);
              }}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${activeTab === "messages" ? "bg-primary text-white" : "text-gray-400 hover:text-white"}`}
            >
              Messages
            </button>
          </div>
        </div>

        {/* --- MAIN CONTENT AREA --- */}
        <div className="bg-cardBg border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl min-h-[60vh]">
          {/* TAB 1: PROJECTS */}
          {activeTab === "projects" && (
            <>
              {!isFormOpen ? (
                <div>
                  <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
                    <h3 className="text-xl font-semibold text-white">
                      All Projects
                    </h3>
                    <button
                      onClick={handleAddNew}
                      className="bg-primary hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition flex items-center gap-2 shadow-lg shadow-primary/20"
                    >
                      <span>+</span> Add New Project
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {projects.length === 0 ? (
                      <div className="text-center py-12 bg-background rounded-2xl border border-gray-800 border-dashed">
                        <p className="text-gray-400 text-lg">
                          No projects found. Add your first project!
                        </p>
                      </div>
                    ) : (
                      projects.map((project) => (
                        <div
                          key={project._id}
                          className="flex flex-col md:flex-row items-start md:items-center justify-between bg-background border border-gray-800 p-6 rounded-2xl gap-6 hover:border-primary/30 transition-all shadow-md group"
                        >
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full md:w-auto">
                            <img
                              src={project.imageUrl}
                              alt={project.title}
                              className="w-full sm:w-48 h-48 sm:h-32 object-cover rounded-xl border border-gray-700 group-hover:border-primary/50 transition-colors"
                            />

                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl text-white font-bold">
                                  {project.title}
                                </h3>
                                <span className="text-[10px] uppercase font-bold bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30">
                                  {project.badge}
                                </span>
                              </div>
                              <p className="text-sm text-gray-400 line-clamp-2 max-w-lg mb-4 leading-relaxed">
                                {project.description}
                              </p>

                              <div className="flex flex-wrap gap-2">
                                {project.tags &&
                                  project.tags.map((tag, i) => (
                                    <span
                                      key={i}
                                      className="text-xs font-medium bg-gray-800 text-gray-300 px-3 py-1.5 rounded-lg border border-gray-700"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 w-full md:w-auto justify-end mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-none border-gray-800">
                            <button
                              onClick={() => handleEdit(project)}
                              className="px-6 py-2.5 bg-blue-600/10 text-blue-400 border border-blue-600/20 hover:bg-blue-600 hover:text-white text-sm font-semibold rounded-xl transition-all"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(project._id)}
                              className="px-6 py-2.5 bg-red-600/10 text-red-400 border border-red-600/20 hover:bg-red-600 hover:text-white text-sm font-semibold rounded-xl transition-all"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ) : (
                /* FORM VIEW */
                <div>
                  <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
                    <h3 className="text-2xl font-bold text-white">
                      {editId ? "Edit Project" : "Add New Project"}
                    </h3>
                    <button
                      onClick={handleCancel}
                      className="text-gray-400 hover:text-white text-sm font-medium transition flex items-center gap-2 bg-background px-4 py-2 rounded-lg border border-gray-800"
                    >
                      <span>←</span> Back to List
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full">
                        <label className="text-gray-400 text-sm mb-2 block">
                          Project Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                        />
                      </div>
                      <div className="w-full">
                        <label className="text-gray-400 text-sm mb-2 block">
                          Badge
                        </label>
                        <input
                          type="text"
                          name="badge"
                          value={formData.badge}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">
                        Description
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full bg-background border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-primary outline-none resize-none transition-colors"
                      ></textarea>
                    </div>

                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">
                        Tags (Comma Separated)
                      </label>
                      <input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        className="w-full bg-background border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full">
                        <label className="text-gray-400 text-sm mb-2 block">
                          Live Demo Link
                        </label>
                        <input
                          type="text"
                          name="liveLink"
                          value={formData.liveLink}
                          onChange={handleChange}
                          className="w-full bg-background border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                        />
                      </div>
                      <div className="w-full">
                        <label className="text-gray-400 text-sm mb-2 block">
                          GitHub Link
                        </label>
                        <input
                          type="text"
                          name="githubLink"
                          value={formData.githubLink}
                          onChange={handleChange}
                          className="w-full bg-background border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="w-full p-6 border-2 border-dashed border-gray-700 rounded-2xl bg-background flex flex-col items-center justify-center relative hover:border-primary transition-colors mt-2">
                      <label className="text-gray-300 text-base mb-3 block font-medium">
                        {editId
                          ? "Update Project Image (Optional)"
                          : "Upload Project Image from PC"}
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        required={!editId}
                        className="text-gray-400 text-sm file:mr-4 file:py-2.5 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-primary/20 file:text-primary hover:file:bg-primary/30 cursor-pointer w-full max-w-md"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={uploading}
                      className={`w-full font-bold py-4 rounded-xl mt-4 transition-all shadow-lg ${uploading ? "bg-gray-700 cursor-not-allowed text-gray-400" : "bg-primary hover:bg-purple-600 text-white shadow-primary/25"}`}
                    >
                      {uploading
                        ? "Processing..."
                        : editId
                          ? "Update Project Details"
                          : "Save New Project"}
                    </button>
                  </form>
                </div>
              )}
            </>
          )}

          {/* TAB 2: MESSAGES */}
          {activeTab === "messages" && (
            <div>
              <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
                <h3 className="text-xl font-semibold text-white">
                  Client Messages
                </h3>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/30">
                  Total: {messages.length}
                </span>
              </div>

              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-gray-500 bg-background rounded-2xl border border-gray-800 border-dashed">
                  <svg
                    className="w-16 h-16 mb-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <p className="text-lg">No new messages yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {messages.map((msg) => (
                    <div
                      key={msg._id}
                      className="bg-background border border-gray-800 p-6 rounded-2xl flex flex-col md:flex-row gap-4 justify-between items-start hover:border-gray-600 transition-colors shadow-md group"
                    >
                      <div className="flex-1 w-full">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h4 className="text-lg font-bold text-white">
                            {msg.name}
                          </h4>
                          <a
                            href={`mailto:${msg.email}`}
                            className="text-sm text-primary hover:underline bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20"
                          >
                            {msg.email}
                          </a>
                          <span className="text-xs text-gray-500 md:ml-auto bg-cardBg px-2 py-1 rounded-md border border-gray-800">
                            {new Date(msg.createdAt).toLocaleString()}
                          </span>
                        </div>
                        <div className="bg-cardBg p-4 rounded-xl border border-gray-800/50 relative">
                          <svg
                            className="absolute top-3 left-3 w-4 h-4 text-gray-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                          <p className="text-gray-300 text-sm whitespace-pre-wrap leading-relaxed pl-8">
                            {msg.message}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteMessage(msg._id)}
                        className="px-5 py-2.5 bg-red-600/10 text-red-400 border border-red-600/20 hover:bg-red-600 hover:text-white text-sm font-semibold rounded-xl transition-all whitespace-nowrap mt-2 md:mt-0 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
