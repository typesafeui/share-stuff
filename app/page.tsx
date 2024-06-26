import { cookies } from "next/headers";

export const runtime = "edge";

export default async function Home() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const env = formData.get("env") as string;
    console.log("server action env", env);
  }
  const Cookies = cookies();

  const jstr = JSON.stringify(Cookies.getAll());

  return (
    <main className="p-12">
      <h1 className="text-4xl text-center mb-4">Share text</h1>
      <div className="p-4 bg-slate-800 rounded-xl border border-white/10">
        {jstr}
      </div>
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
