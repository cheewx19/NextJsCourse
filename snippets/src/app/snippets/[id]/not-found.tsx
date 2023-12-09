// Note that pages will try to find the CLOSEST not found page.
// Eg. if theres a not found page within a directory. the pages within that directory will retrieve the first not found
// page before cycling into other directories.
export default function SnippetNotFound() {
  return (
    <div>
      <h1 className="text-xl bold">Sorry, but we couldnt find that particular snippet</h1>
    </div>
  );
}
