"use client";

import React, { useState, ChangeEvent, DragEvent } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const Renovate: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const prompt: string = "turn the sketch into realistic design ";
  // const prompt: string =
  //   "Renovate the input image room, a modern  bedroom. Please leave the furniture in its current position; only renovate the room without changing the arrangement of the furniture. ";

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = () => {
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleEditImage = async () => {
    if (!image) {
      alert("Please select an image file");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("prompt", prompt);
    formData.append("mode", "image-to-image");
    formData.append("strength", "1");

    try {
      const response = await axios.post(
        // `https://api.stability.ai/v2beta/stable-image/generate/sd3`,
        `https://api.stability.ai/v2beta/stable-image/control/sketch`,
        formData,
        {
          responseType: "arraybuffer",
          headers: {
            Authorization: `Bearer sk-o8fkcV4mCWks8zC0AdTIKlfYt26RbvcrtY2Bv9Uc4ExdICIZ`,
            Accept: "image/*",
          },
        }
      );

      if (response.status === 200) {
        const blob = new Blob([response.data], { type: "image/jpeg" });
        const url = URL.createObjectURL(blob);
        setEditedImage(url);
      } else {
        throw new Error(`${response.status}: ${response.data.toString()}`);
      }
    } catch (error) {
      console.error("Error editing image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Upload a photo of your room</h1>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={`w-full max-w-md p-6 border-2 border-dashed rounded-lg bg-gray-800 flex flex-col items-center justify-center mb-6 ${
          isDragging ? "border-green-500 bg-green-900" : "border-gray-500"
        }`}
      >
        <p className="mb-4 text-gray-300">
          {imagePreview
            ? "Image ready to upload"
            : "Drag & Drop your image here"}
        </p>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="fileInput"
        />
        <label
          htmlFor="fileInput"
          className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600"
        >
          {imagePreview ? "Change selected file" : "or select a file"}
        </label>
      </div>
      {imagePreview && (
        <div className="w-full max-w-md mb-6">
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}
      <button
        onClick={handleEditImage}
        className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
        disabled={isLoading}
      >
        Generate Design
      </button>
      {isLoading && (
        <div className="flex items-center justify-center mt-4">
          <ClipLoader color="#ffffff" />
          <span className="ml-2">Processing...</span>
        </div>
      )}
      {editedImage && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Edited Image</h2>
          <img
            src={editedImage}
            alt="Edited result"
            className="max-w-full rounded shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Renovate;
