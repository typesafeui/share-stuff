import Image from "next/image";
import fs from "fs";

export default function Home() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const env = formData.get("env") as string;
    fs.writeFileSync(".share.env", env);
  }

  return (
    <main className="p-12">
      <h1 className="text-4xl text-center mb-4">Share text</h1>
      <form
        action={handleSubmit}
        className="flex flex-col items-center w-full h-full px-4"
      >
        <textarea
          name="env"
          className="bg-stone-950 w-full h-96 rounded-xl text-white border border-white/10 p-4"
          placeholder="Paste your .env file here"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg mt-4"
        >
          Share
        </button>
      </form>
    </main>
  );
}
