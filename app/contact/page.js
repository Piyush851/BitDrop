export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">
        Contact
      </h1>

      <p className="text-slate-700 mb-6">
        Have feedback, suggestions, or questions about BitDrop?
        Feel free to reach out.
      </p>

      <div className="space-y-3 text-slate-700">
        <p>
          <span className="font-medium text-slate-900">Email:</span>{" "}
          piyushsaini01@outlook.com
        </p>

        <p>
          <span className="font-medium text-slate-900">GitHub:</span>{" "}
          <a
            href="https://github.com/Piyush851/BitDrop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            github.com/Piyush851/BitDrop
          </a>
        </p>
      </div>
    </div>
  );
}
